import styles from './Landing.module.css'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LobbyList from '../LobbyList/LobbyList'
import * as lobbyService from "../../services/lobbyService";
const Landing = ({ user, handleDeleteLobby, handleJoin, lobby, handleGetAllLobby }) => {

  // const [ allLobby, setAllLobby ] = useState([])
  
  // useEffect(() => {
  //   lobbyService.getAllLobby()
  //   .then(res => {
  //     setAllLobby(res)
  //   })
  // }, [])

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {lobby && lobby.map((lobbies)=>(
        <div key={lobbies._id}>
          <LobbyList 
          // allLobby={allLobby}
          handleJoin={handleJoin}
          user={user}
          lobby={lobbies}
          handleDeleteLobbies={handleDeleteLobby}
          handleGetAllLobby={handleGetAllLobby}
          />
        </div>
      ))}
    </main>
  )
  
}

export default Landing
