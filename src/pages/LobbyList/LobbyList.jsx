import React, {useState, useEffect} from "react";
import {Link } from 'react-router-dom'
// import LobbyDetail from './pages/LobbyDetail/LobbyDetail'
const LobbyList = ({lobby, handleDeleteLobbies, user, handleJoin})=>{
useEffect(() =>{
  console.log(lobby)
},[lobby])
  return (
		<>
			<h1> {lobby?.owner?.name}</h1>
			<h1>{lobby?.name}</h1>
			{lobby.owner._id && lobby?.owner?._id === user?.profile ? (
				<div>
					<button onClick={() => handleDeleteLobbies(lobby._id)}>Delete</button>
					<Link to="/edit-lobby" state={lobby}>
						Update Lobby
					</Link>
					<Link to="/lobby-detail" state={lobby}>
						<button>View</button>
					</Link>
				</div>
			) : (
				<>
					<Link to="/lobby-detail" state={lobby}>
						<button onClick={() => handleJoin(lobby._id)}>Join</button>
					</Link>
				</>
			)}
		</>
	);
}

export default LobbyList