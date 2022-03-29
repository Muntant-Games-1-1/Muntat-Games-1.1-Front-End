import react from "react";
import "./LobbyDetail.css";
import { useLocation } from "react-router-dom";
import Message from "../../components/Message/Message.jsx";

function LobbyDetail({}) {
	let location = useLocation();
	let detail = location.state;

	return (
		<>
			<div className="lobby-detail">
				<div className="main">
					<div className="leftSide">
						<div className="leftSide-items">
							<div className="gameName">
								<h1>Game: {detail.game.name}</h1>
							</div>
							<div>
								{detail.game.description ? (
									<p>{detail.game.description}</p>
								) : (
									<p> No description Available </p>
								)}
							</div>
						</div>
					</div>
					<div className="rightside">
						<div className="rightside-item">
							<div className="lobbyname">
								<h2>Lobby Name: {detail.name}</h2>
							</div>
							<h2>{detail.owner.name}'s Lobby</h2>
							{detail.waitingPlayers?.map(player => (
								<h2>Waiting Players: {player.name}</h2>
							))}
							<h2>
								Open spots: {detail.game.maxPlayers - detail.waitingPlayers.length}
							</h2>
						</div>
					</div>
				</div>
				<Message details={detail} />
			</div>
		</>
	);
}

export default LobbyDetail;
