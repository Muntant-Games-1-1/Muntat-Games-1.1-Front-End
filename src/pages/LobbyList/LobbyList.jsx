import React, { useEffect } from "react";
import { Link } from 'react-router-dom'
import styles from './LobbyList.module.css'
const LobbyList = ({ lobby, handleDeleteLobbies, user, handleJoin, chooseRandomBackgroundImage }) => {
	// Constants
	const players = lobby.waitingPlayers?.map(player => player._id) ?? 'Guest'
	const playersInLobby = lobby?.waitingPlayers?.length ?? 1
	const isTheLobbyFull = playersInLobby >= lobby.lobbyLimit
	const backgroundImage = chooseRandomBackgroundImage()
	//JSX
	return (
		<div className={styles.container} style={{ backgroundImage: `url('${backgroundImage}')` }}>
			<div className={styles.lobby_info}>
				<p className={styles.lobby_owner}>A Lobby By {lobby.owner?.name ?? 'Guest'}</p>
				<span><h3>{lobby?.game?.name ?? lobby?.game}</h3></span>
				<span>Lobby Name: {lobby?.name}</span>
			</div>
			{(lobby?.owner?._id === user?.profile) ? (
				<div className={styles.buttonContainer}>
					<>
						<button
							onClick={() => handleDeleteLobbies(lobby._id)}
							className={styles.delete}>
							Delete
						</button>
						<Link to="/edit-lobby" state={lobby}>
							<button className={styles.update}>Update</button>
						</Link>
					</>
					<Link to={`/lobby-detail/${lobby._id}`} state={lobby}>
						<button
							className={styles.join}
						>View</button>
					</Link>
				</div>
			) : (
				// If The Player Is A Member OF The Lobby They Will Have A View Button, Instead Of A Join Button
				<>
					{!user || players?.includes(user?.profile?.toString()) || isTheLobbyFull ? (
						<div className={styles.buttonContainer}>
							<Link to={`/lobby-detail/${lobby._id ?? 'guest-session'}`} state={lobby}>
								<button>View</button>
							</Link>
						</div>

					) : (
						// If The Player Is NOT Member OF The Lobby They Will Have A Join Button
						<div className={styles.buttonContainer}>
							<Link to={`/lobby-detail/${lobby?._id}`} state={lobby}>
								<button onClick={() => handleJoin(lobby?._id)}>Join</button>
							</Link>
						</div>
					)
					}
				</>
			)}
			<div className={styles.players}>
				<p>Lobby Capacity</p>
				{lobby ?
					<>
						{isTheLobbyFull ? (
							<>
								<p className={styles.red}>Lobby Full</p>
							</>
						) : (
							<>
								<p>{playersInLobby}/{lobby.lobbyLimit}</p>
							</>
						)}
					</>
					:
					<>
						<p>loading..</p>
					</>
				}
			</div>
		</div>
	);
}

export default LobbyList