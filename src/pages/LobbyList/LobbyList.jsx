import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from './LobbyList.module.css'
const LobbyList = ({ lobby, handleDeleteLobbies, user, handleJoin, setLobby, chooseRandomBackgroundImage }) => {
	let players = lobby.waitingPlayers.map(player => player._id)
	return (
		<div className={styles.container} style={{ backgroundImage: `url(${chooseRandomBackgroundImage()})` }}>
			<span><p>Game:</p><h3>{lobby?.game?.name}</h3></span>
			{(lobby.owner._id && lobby?.owner?._id === user?.profile) ? (
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
				<>
					{players?.includes(user?.profile?.toString()) ? (
						<div className={styles.buttonContainer}>
							<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
								<button>View</button>
							</Link>
						</div>

					) : (
						<div className={styles.buttonContainer}>
							<Link to={`/lobby-detail/${lobby?._id}`} state={lobby}>
								<button onClick={() => handleJoin(lobby?._id)}>Join</button>
							</Link>
						</div>
					)
					}
				</>
			)}
			<span><p>Lobby Name:</p><h3>{lobby?.name}</h3></span>
			<p>A Lobby By {lobby.owner.name}</p>
		</div>
	);
}

export default LobbyList