import styles from './Landing.module.css'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LobbyList from '../LobbyList/LobbyList'
import * as lobbyService from "../../services/lobbyService";
const Landing = ({ user, lobby, handleDeleteLobby, handleJoin }) => {

  const [ allLobby, setAllLobby ] = useState([])
  
  useEffect(() => {
    lobbyService.getAllLobby()
    .then(res => {
      setAllLobby(res)
      console.log(res)
    })
  }, [])
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {allLobby && allLobby.map((lobbies)=>(
        <div key={lobbies._id}>
          <LobbyList 
          // allLobby={allLobby}
          handleJoin={handleJoin}
          user={user}
          lobby={lobbies}
          handleDeleteLobbies={handleDeleteLobby}
          />
        </div>
      ))}
    </main>
  )
  
}

export default Landing
