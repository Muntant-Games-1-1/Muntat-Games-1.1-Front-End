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

const App = () => {
	// State Constants
	const [user, setUser] = useState(authService.getUser());
	const [lobby, setLobby] = useState([]);
	const [categories, setCategories] = useState([]);
	const [games, setGames] = useState([]);
  
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
    lobbyService.createLobby(newLobby)
      .then(createdLobby => {
        setLobby([...lobby, createdLobby])
        navigate('/')
      })
      .catch(navigate('/'))
  }
	useEffect(() => {
		if (user) {
			lobbyService.getAllLobby().then(allLobby => setLobby(allLobby));
		}
	}, [user]);

	const handleLogout = () => {
		authService.logout();
		setUser(null);
		navigate("/");
	};

	const handleSignupOrLogin = () => {
		setUser(authService.getUser());
	};

	function handleCreateLobby(newLobby) {
		lobbyService
			.createLobby(newLobby)
			.then(createdLobby => {
				setLobby([...lobby, createdLobby]);
				console.log("state updated");
				navigate("/");
			})
			.catch(navigate("/"));
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

	const handleJoin = (lobby_id) => {
		lobbyService.joinLobby(lobby_id)
	}

	return (
		<>
			<NavBar user={user} handleLogout={handleLogout} />
			<Routes>
				<Route
					path="/"
					element={
						<Landing
							user={user}
							lobby={lobby}
							handleDeleteLobby={handleDeleteLobby}
							handleJoin={handleJoin}
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
					path="/lobby-detail"
					element={
						user ? (
							<LobbyDetail />
						) : (
							<Navigate to="/login" />
						)
					}
				/>
			</Routes>
		</>
	);
};

export default App;