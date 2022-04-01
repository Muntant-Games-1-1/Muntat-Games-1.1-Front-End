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
				<div className="main">
					<div className="leftSide">
						<div className="leftSide-items">
							<div className="gameName">
								<h1>Game: {lobbyInfo?.game?.name}</h1>
							</div>
							<div>
								{lobbyInfo?.game?.description ? (
									<p>{lobbyInfo?.game?.description}</p>
								) : (
									<p> No description Available </p>
								)}
							</div>
						</div>
					</div>
					<div className="rightside">
						<div className="rightside-item">
							<div className="lobbyname">
								<h2>Lobby Name: {lobbyInfo?.name}</h2>
							</div>
							<h2>{lobbyInfo?.owner?.name}'s Lobby</h2>
							<h2>
								Waiting Players: { waitingList?.join(", ") }
							</h2>
							<h2>
								Open spots:{" "}
								{lobbyInfo?.game?.maxPlayers - lobbyInfo?.waitingPlayers?.length}
							</h2>
						</div>
						<>						
							<Link to="/" >
						<button onClick={() => handleJoin(lobbyInfo?._id)}>leave lobby</button>
					</Link>
						
						</>
					</div>
				</div>
				<Message details={lobbyInfo} user={user}/>
			</div>
	);
}

export default LobbyDetail;
