import styles from './Landing.module.css'
import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import LobbyList from '../LobbyList/LobbyList'
import './Landing.module.css'
import * as lobbyService from "../../services/lobbyService";
const Landing = ({ user, handleDeleteLobby, handleJoin, lobby, handleGetAllLobby }) => {

  return (
    <>
    <div className={styles.header}>
      <h1 className={styles.title}>All Lobbies</h1>
      {!user ? <p>Login or Sign-up To Join / Create A Lobby</p> : ''}
      </div>
    <main className={styles.container}>
      {lobby && lobby.map((lobbies)=>(
        <div key={lobbies._id}>
          <LobbyList 
          handleJoin={handleJoin}
          user={user}
          lobby={lobbies}
          handleDeleteLobbies={handleDeleteLobby}
          handleGetAllLobby={handleGetAllLobby}
          />
        </div>
      ))}
    </main>
    </>
  )
  
}

export default Landing
