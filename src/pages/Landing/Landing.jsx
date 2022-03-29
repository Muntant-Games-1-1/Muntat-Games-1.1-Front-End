import styles from './Landing.module.css'
import { Link } from 'react-router-dom'
import LobbyList from '../LobbyList/LobbyList'

const Landing = ({ user, lobby, handleDeleteLobby, handleJoin }) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {lobby && lobby.map((lobbies)=>(
        <div key={lobbies._id}>
          <LobbyList 
          handleJoin={handleJoin}
          user={user}
          lobby={lobbies}
          handleDeleteLobbies={handleDeleteLobby}/>
        </div>
      ))}
    </main>
  )
  
}

export default Landing
