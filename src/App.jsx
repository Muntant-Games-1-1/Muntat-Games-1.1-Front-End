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
	const potentialBackgroundImages = [
		'https://wallpaperboat.com/wp-content/uploads/2020/08/08/52220/dark-theme-04.jpg',
		'https://img.wallpapersafari.com/desktop/1280/1024/57/25/zja5nO.jpg',
		'https://cdn.wallpapersafari.com/49/71/2ceG5f.jpg',
		'https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700331849.jpg',
		'https://img.freepik.com/free-photo/black-monstera-leaves-background-wallpaper_53876-102420.jpg?w=2000', 'https://wallpapertops.com/walldb/original/c/f/1/1365.jpg',
		'https://s3.envato.com/files/220900172/Rain%20On%20Window%20With%20Black%20Background%2003%20Preview.jpg', 'https://t4.ftcdn.net/jpg/01/32/33/79/360_F_132337982_11bhtebolWPLaVglNO2BZudxwD4WGxQ8.jpg',
		'https://media.istockphoto.com/photos/wave-of-particles-abstract-wave-dots-in-dark-background-big-data-picture-id1355464281?b=1&k=20&m=1355464281&s=170667a&w=0&h=y6kP6uqj4rHFbDphl8BK1cgLxjDeidQSBLw13wcjRD0=']

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

	const handleCreateLobby = newLobby => {
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

	const handleEditLobby = lobbyInfo => {
		lobbyService.updateLobby(lobbyInfo).then(updatedLobby => {
			const newLobbies = lobby.map(l => {
				return l._id === updatedLobby._id ? updatedLobby : l;
			});
			setLobby(newLobbies);
		});
		navigate("/");
	}

	const handleCreateGame = game => {
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

	const chooseRandomBackgroundImage = () => {
		let random = Math.floor(Math.random() * 9)
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
					element={<Profiles />}
				/>
				<Route
					path="/changePassword"
					element={<ChangePassword handleSignupOrLogin={handleSignupOrLogin} />}
				/>
				<Route
					path="/create-lobby"
					element={<MakeALobby handleCreateLobby={handleCreateLobby} games={games.games} />}
				/>
				<Route
					path="/edit-lobby"
					element={<EditALobby handleEditLobby={handleEditLobby} games={games.games} />}
				/>
				<Route
					path="/add-game"
					element={<AddAGame handleCreateGame={handleCreateGame} categories={categories} />}
				/>
				<Route
					path="/lobby-detail/:lobby_id"
					element={
						<LobbyDetail
							user={user}
							handleJoin={handleJoin}
							lobby={lobby}
							handleDeleteLobby={handleDeleteLobby}
							setLobby={setLobby}
							handleJoinAndLeave={handleJoinAndLeave}
						/>}
				/>
				< Route path='*' element={< PageNotFound />} />
			</Routes>
		</>
	);
};

export default App;
