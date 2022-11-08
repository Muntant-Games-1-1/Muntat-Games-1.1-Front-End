import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import Message from "../../components/Message/Message.jsx";
import * as lobbyService from "../../services/lobbyService";
import styles from "./LobbyDetail.module.css";

function LobbyDetail({
  handleJoin,
  lobby,
  handleDeleteLobby,
  user,
  handleJoinAndLeave,
}) {
  const { lobby_id } = useParams();
  const [lobbyInfo, setLobbyInfo] = useState({});
  const waitingList = lobbyInfo?.waitingPlayers?.map((player) => player.name);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    lobbyService.getLobbyById(lobby_id).then((res) => {
      setLobbyInfo(res);
    });
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className="rightside">
          <div className={styles.center}>
            <div className="lobbyname">
              <h4 className={styles.center}>Lobby Name: </h4>
              <h1 className={styles.center}>{lobbyInfo?.name}</h1>
            </div>
            <h4 className={styles.center}>
              Brought To You By {lobbyInfo?.owner?.name ?? "Guest"}
            </h4>
            <hr />
            {user ? (
              <h2>Waiting Players: {waitingList?.join(", ")}</h2>
            ) : (
              <h2>This Is A Guest Preview</h2>
            )}
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
            {user ? (
              <button
                onClick={() => handleJoinAndLeave(lobbyInfo?._id)}
                className={styles.leaveButton}
              >
                Exit Lobby
              </button>
            ) : (
              <button
                className={styles.leaveButton}
                onClick={() => navigate("/")}
              >
                Back To Home
              </button>
            )}
          </div>
        </div>
      </div>
      <Message
        lobbyDetails={lobbyInfo}
        user={user}
        lobbyId={location.state[0]}
      />
    </div>
  );
}

export default LobbyDetail;
