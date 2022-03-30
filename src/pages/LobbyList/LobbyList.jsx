import React, { useEffect } from "react";
import { Link } from 'react-router-dom'

const LobbyList = ({ lobby, handleDeleteLobbies, user, handleJoin, setLobby })=>{
	let players = lobby.waitingPlayers.map(player => player._id)
	// console.log('players', players)
	
	useEffect(() => {
		players = lobby.waitingPlayers.map(player => player._id)
		console.log('lobby state change', lobby);
	})
  return (
		<>
			<h1> {lobby?.owner?.name}</h1>
			<h1>{lobby?.name}</h1>
			{lobby.owner._id && lobby?.owner?._id === user?.profile ? (
				<div>
					<button onClick={() => handleDeleteLobbies(lobby?._id)}>Delete</button>
					<Link to="/edit-lobby" state={lobby}>
						Update Lobby
					</Link>
					<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button>View</button>
					</Link>
				</div>
				) : (
				<>
				{ players?.includes(user?.profile?.toString()) ? (
					
						<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button>View</button>
					</Link>
					) : (
					<Link to={`/lobby-detail/${lobby?._id}` } state = { lobby }>
							<button onClick={ () => handleJoin(lobby?._id) }>Join</button>
					</Link>
				)}
				</>
			)}
		</>
	);
}

export default LobbyList