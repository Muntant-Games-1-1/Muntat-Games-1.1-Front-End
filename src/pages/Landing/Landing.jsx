import styles from './Landing.module.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LobbyList from '../LobbyList/LobbyList'
import './Landing.module.css'
import * as lobbyService from "../../services/lobbyService";

const Landing = ({ user, handleDeleteLobby, handleJoin, lobby, handleGetAllLobby, setLobby, chooseRandomBackgroundImage }) => {

  return (
    <div className={styles.total_home}>
      <div className={styles.header}>
        <h1>Match Making</h1>
        <h1 className={styles.title}> Built For Gamers.</h1>
      </div>
      {!user ?
        <div className={styles.header}>
          <p>Login or Sign-up To Join / Create A Lobby</p>
        </div>
        :
        <div className={styles.header}>
          <p className={styles.details}>
            Mutant Games is an open source video game lobby service! Users can create and join lobbies to connect with their friends and chat about their favorite video games. Create a lobby to get started, or visit us on Github below to make contributions.
          </p>
          <div>
            <a href="https://github.com/Muntant-Games-1-1/Muntat-Games-1.1-Front-End" rel='noreferrer' target="_blank"><button className={styles.reg_btn}>Github</button></a>
            <Link to='/create-lobby'><button className={styles.reg_btn}>Create A Lobby</button></Link>
            <Link to="/add-game"><button className={styles.the_btn}>Add A Game</button></Link>
          </div>
        </div>
      }
      <main className={styles.container}>
        {lobby && lobby.map((lobbies) => (
          <div key={lobbies._id}>
            <LobbyList
              handleJoin={handleJoin}
              user={user}
              lobby={lobbies}
              handleDeleteLobbies={handleDeleteLobby}
              handleGetAllLobby={handleGetAllLobby}
              chooseRandomBackgroundImage={chooseRandomBackgroundImage}
            />
          </div>
        ))}
      </main>
    </div>
  )

}

export default Landing
