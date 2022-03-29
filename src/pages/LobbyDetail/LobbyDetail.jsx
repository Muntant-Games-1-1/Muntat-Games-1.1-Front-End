import React, { useState, useEffect }from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import Message from "../../components/Message/Message.jsx";
import { joinLobby } from "../../services/lobbyService";
import * as lobbyService from "../../services/lobbyService";
import "./LobbyDetail.css";

function LobbyDetail({handleJoin, lobby, handleDeleteLobby}) {
	const { lobby_id } = useParams()
	const[lobbyInfo, setLobbyInfo] =useState([])
	console.log('waiting players',lobbyInfo._id);

	useEffect(() =>{
		console.log('log')
		lobbyService.getLobbyById(lobby_id)
		.then(res => setLobbyInfo(res))
	},[])

	useEffect(() => {
	})

	return (
		<>
		{console.log(lobbyInfo)}
			<div className="lobby-detail">
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
								Waiting Players:
								{lobbyInfo.waitingPlayers?.map((player,i) => (
									<span key={i}> {player.name}, </span>
								))}
							</h2>
							<h2>
								Open spots:{" "}
								{lobbyInfo?.game?.maxPlayers - lobbyInfo?.waitingPlayers?.length}
							</h2>
						</div>
						<>{}
						<Link to="/"  state={lobby}>
						<button onClick={() => handleDeleteLobby(lobby._id)}>Delete</button>
						{/* {console.log('wow',)} */}
					</Link>
						<Link to="/" >
							
						<button onClick={() => handleJoin(lobbyInfo?._id)}>leave lobby</button>
					</Link>
						</>
					</div>
				</div>
				<Message details={lobbyInfo} />
			</div>
		</>
	);
}

export default LobbyDetail;
