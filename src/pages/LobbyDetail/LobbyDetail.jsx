import react from 'react'
import './LobbyDetail.css'
import { useLocation } from 'react-router-dom'
import Message from "../../components/Message/Message.jsx"

function LobbyDetail({}){
  let location = useLocation()
  let detail = location.state

  return (
		<>
			<div className="lobby-detail">
				<div className="main">
					<div className="leftSide">
						<div className="leftSide-items">
							<div className="gameName">
								<h1>Game Name: {detail.game.name}</h1>
							</div>
              <div>
                { detail.game.description ? 
                  <p> {detail.game.description}</p>
                  :
                  <p> No description Available </p>
                  }
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
                <h2>Waiting Players { player.name }</h2>
							))}
							<h2>remainf spot XXX</h2>
						</div>
					</div>
				</div>
        <Message props={detail} />
        {/* This is where message form will go <MessageForm /> */} 
				<form action="" method="POST">
					<h1>.....</h1>
					<h1>Name</h1>
					<input type="text" />
					<button type="button" className="btn btn-outline-success">
						Success
					</button>
				</form>
			</div>
		</>
	);
}

export default LobbyDetail