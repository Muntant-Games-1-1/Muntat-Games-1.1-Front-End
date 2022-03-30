import React, {useState, useEffect} from "react";
import {Link } from 'react-router-dom'
import styles from './LobbyList.module.css'
const LobbyList = ({lobby, handleDeleteLobbies, user, handleJoin})=>{
	
  return (
		<div className={styles.container}>
			<h1> {lobby?.owner?.name}</h1>
			<h1>{lobby?.name}</h1>
			{lobby.owner._id && lobby?.owner?._id === user?.profile ? (
				<div className={styles.buttonContainer}>
					<div className={styles.editDeleteContainer}>
						<button onClick={() => handleDeleteLobbies(lobby._id)}>Delete</button>
						<button>
						<Link to="/edit-lobby" state={lobby}>
							Update Lobby
						</Link>
						</button>
					</div>
					<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button>View</button>
					</Link>
				</div>
			) : (
				<div className={styles.buttonContainer}>
					<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button onClick={() => handleJoin(lobby?._id)}>Join</button>
					</Link>
				</div>
			)}
		</div>
	);
}

export default LobbyList