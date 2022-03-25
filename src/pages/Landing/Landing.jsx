import styles from './Landing.module.css'
import LobbyList from '../LobbyList/LobbyList'
const Landing = ({ user, lobby ,handleDeleteLobby}) => {
  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {lobby && lobby.map((lobbies)=>(
        <div key={lobbies._id}>
          <LobbyList  lobby={lobbies} handleDeleteLobbies={handleDeleteLobby}/>
        </div>
        
      ))}
    </main>
  )
  
}

export default Landing
