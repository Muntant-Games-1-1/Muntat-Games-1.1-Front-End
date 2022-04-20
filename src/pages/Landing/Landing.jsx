import styles from './Landing.module.css'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LobbyList from '../LobbyList/LobbyList'
import './Landing.module.css'
import * as lobbyService from "../../services/lobbyService";

const Landing = ({ user, handleDeleteLobby, handleJoin, lobby, handleGetAllLobby, setLobby }) => {

  return (
    <div class={styles.total_home}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cumque distinctio quo architecto, ullam numquam autem laboriosam nobis, molestias officia sequi non beatae sunt inventore repellendus eum, enim qui repudiandae.
          </p>
          <div className={styles.main_buttons}>
            <button className={styles.reg_btn}>Button</button>
            <button className={styles.reg_btn}>My Button Example</button>
            <button className={styles.the_btn}>Button Here</button>
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
            />
          </div>
        ))}
      </main>
    </div>
  )

}

export default Landing
