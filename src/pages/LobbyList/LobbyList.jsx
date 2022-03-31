import React, {useState, useEffect} from "react";
import {Link } from 'react-router-dom'
import styles from './LobbyList.module.css'
const LobbyList = ({lobby, handleDeleteLobbies, user, handleJoin})=>{
  return (
		<div className={styles.container}>
			<span><p>Game:</p><h3>{lobby?.game.name}</h3></span>
			{lobby.owner._id && lobby?.owner?._id === user?.profile ? (
				<div className={styles.buttonContainer}>
					<div className={styles.editDeleteContainer}>
						<button
							onClick={() => handleDeleteLobbies(lobby._id)}
							className={styles.delete}>
							Delete
						</button>
						<Link to="/edit-lobby" state={lobby}>
							<button className={styles.update}>Update Lobby</button>
						</Link>
				
					</div>
					<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button
						className={styles.join}
						>View</button>
					</Link>
				</div>
			) : (
				<div className={styles.buttonContainer}>
					<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button
						onClick={() => handleJoin(lobby?._id)}
						className={styles.join}
						>Join</button>
					</Link>
				</div>
			)}
			<span><p>Lobby Name:</p><h3>{lobby?.name}</h3></span>
			<p>A Lobby By {lobby.owner.name}</p>
		</div>
	);
}

export default LobbyList