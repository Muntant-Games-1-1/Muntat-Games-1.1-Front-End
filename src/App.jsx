import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Landing from "./pages/Landing/Landing";
import Profiles from "./pages/Profiles/Profiles";
import ChangePassword from "./pages/ChangePassword/ChangePassword";
import * as authService from "./services/authService";
import * as lobbyService from "./services/lobbyService";
import MakeALobby from "./pages/MakeALobby/MakeALobby";
import AddAGame from "./pages/AddAGame/AddAGame";
import EditALobby from "./pages/EditALobby/EditALobby";
import * as gameService from "./services/gameService";
import LobbyDetail from "./pages/LobbyDetail/LobbyDetail";
import PageNotFound from './pages/PageNotFound/PageNotFound'
import './App.css';

const App = () => {
	// State Constants
	const [user, setUser] = useState(authService.getUser());
	const [lobby, setLobby] = useState([]);
	const [categories, setCategories] = useState([]);
	const [games, setGames] = useState([]);
	// Other Constants
	const potentialBackgroundImages = ['https://wallpaperaccess.com/full/1616111.jpg', 'https://wallpapercave.com/wp/wp3085127.jpg', 'https://wallpaperboat.com/wp-content/uploads/2020/08/08/52220/dark-theme-04.jpg', 'https://img.wallpapersafari.com/desktop/1280/1024/57/25/zja5nO.jpg', 'https://cdn.wallpapersafari.com/49/71/2ceG5f.jpg', 'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700331849.jpg', 'https://www.teahub.io/photos/full/87-874404_wallpaper-red-black-abstract-high-resolution-red-and.jpg', 'https://img.freepik.com/free-photo/black-monstera-leaves-background-wallpaper_53876-102420.jpg?w=2000', 'https://wallpapertops.com/walldb/original/c/f/1/1365.jpg', 'https://images.unsplash.com/photo-1636953056323-9c09fdd74fa6?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max', '']
	const navigate = useNavigate();
	// Side Effects
	useEffect(() => {
		gameService.getAllGames().then(allGames => setGames(allGames));
	}, []);

	useEffect(() => {
		lobbyService.getAllLobby().then(allLobby => setLobby(allLobby));

	}, []);

	useEffect(() => {
		gameService.getCategories().then(categories => setCategories(categories));
	}, []);

	function handleCreateLobby(newLobby) {
		lobbyService
			.createLobby(newLobby)
			.then(createdLobby => {
				setLobby([...lobby, createdLobby]);
				navigate("/");
			})
			.catch(navigate("/"));
	}

	// Event Handlers
	const handleLogout = () => {
		authService.logout();
		setUser(null);
		navigate("/");
	};

	const handleSignupOrLogin = () => {
		setUser(authService.getUser());
	};

	const handleGetAllLobby = () => {
		lobbyService.getAllLobby().then(lobbies => setLobby(lobbies))
	}
	const handleDeleteLobby = id => {
		lobbyService
			.deleteOneLobby(id)
			.then(deleteOneLobby =>
				setLobby(lobby.filter(lobby => lobby._id !== deleteOneLobby._id))
			);
	};

	function handleEditLobby(lobbyInfo) {
		lobbyService.updateLobby(lobbyInfo).then(updatedLobby => {
			const newLobbies = lobby.map(l => {
				return l._id === updatedLobby._id ? updatedLobby : l;
			});
			setLobby(newLobbies);
		});
		navigate("/");
	}

	function handleCreateGame(game) {
		gameService.addGame(game);
		navigate("/");
	}

	const handleJoin = lobby_id => {
		lobbyService
			.joinLobby(lobby_id)
			.then(res => handleGetAllLobby)
	};

	const handleJoinAndLeave = lobby_id => {
		lobbyService
			.joinLobby(lobby_id)
			.then(res => handleGetAllLobby())
			.then(() => navigate('/'));
	};

	function chooseRandomBackgroundImage() {
		let random = Math.floor(Math.random() * 10)
		return potentialBackgroundImages[random]
	}
	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} handleGetAllLobby={handleGetAllLobby} />
			<Routes>
				<Route
					path="/"
					element={
						<Landing
							user={user}
							lobby={lobby}
							handleDeleteLobby={handleDeleteLobby}
							handleJoin={handleJoin}
							handleGetAllLobby={handleGetAllLobby}
							chooseRandomBackgroundImage={chooseRandomBackgroundImage}
						/>
					}
				/>
				<Route
					path="/signup"
					element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route
					path="/login"
					element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route
					path="/profiles"
					element={user ? <Profiles /> : <Navigate to="/login" />}
				/>
				<Route
					path="/changePassword"
					element={
						user ? (
							<ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					path="/create-lobby"
					element={
						user ? (
							<MakeALobby
								handleCreateLobby={handleCreateLobby}
								games={games.games}
							/>
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					path="/edit-lobby"
					element={
						user ? (
							<EditALobby
								handleEditLobby={handleEditLobby}
								games={games.games}
							/>
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					path="/add-game"
					element={
						user ? (
							<AddAGame
								handleCreateGame={handleCreateGame}
								categories={categories}
							/>
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				<Route
					path="/lobby-detail/:lobby_id"
					element={
						user ? (
							<LobbyDetail
								user={user}
								handleJoin={handleJoin}
								lobby={lobby}
								handleDeleteLobby={handleDeleteLobby}
								setLobby={setLobby}
								handleJoinAndLeave={handleJoinAndLeave}
							/>
						) : (
							<Navigate to="/login" />
						)
					}
				/>
				< Route path='*' element={< PageNotFound />} />
			</Routes>
		</>
	);
};

export default App;
