import React, { useState, useEffect }from "react";
import { Link, useParams } from "react-router-dom";
import Message from "../../components/Message/Message.jsx";
import * as lobbyService from "../../services/lobbyService";
import styles from './LobbyDetail.module.css'

function LobbyDetail({ handleJoin, lobby, handleDeleteLobby, user}) {
	const { lobby_id } = useParams()
	const [lobbyInfo, setLobbyInfo] = useState({})
	const waitingList = lobbyInfo?.waitingPlayers?.map(player => player.name);

	useEffect(() => {
		lobbyService.getLobbyById(lobby_id)
			.then(res => {
				setLobbyInfo(res)
			})
	}, [])
	return (
			<div className={styles.container}>
				<div className={styles.main}>
					<div className="rightside">
						<div className={styles.center}>
							<div className="lobbyname">
								<h4 className={styles.center}>Lobby Name: </h4>
								<h1 className={styles.center}>{lobbyInfo?.name}</h1>
							</div>
							<h4 className={styles.center}>Brought To You By {lobbyInfo?.owner?.name}</h4>
							<hr/>
							<h2>
								Waiting Players: { waitingList?.join(", ") }
							</h2>
							
							<h2>
								Lobby Openings:{" "}
								{lobbyInfo?.game?.maxPlayers - lobbyInfo?.waitingPlayers?.length}
							</h2>
						</div>
						<div className="gameName">
								<h1 className={styles.center}>{lobbyInfo?.game?.name}</h1>
								{lobbyInfo?.game?.description ? (
									<p className={styles.center}>{lobbyInfo?.game?.description}</p>
								) : (
									<p className={styles.center}> No description Available </p>
								)}
							</div>
						<div className={styles.center}>						
							<Link to="/" >
						<button
							 onClick={() => handleJoin(lobbyInfo?._id)}
							 className={styles.leaveButton}
						>
							Exit Lobby
						</button>
					</Link>
						</div>
					</div>
				</div>
				<Message details={lobbyInfo} user={user}/>
			</div>
	);
}

export default LobbyDetail;
