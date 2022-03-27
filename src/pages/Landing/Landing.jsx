import styles from './Landing.module.css'
import LobbyList from '../LobbyList/LobbyList'

const Landing = ({ user, lobby ,handleDeleteLobby}) => {
  

const Landing = ({ user, lobby }) => {

  return (
    <main className={styles.container}>
      <h1>hello, {user ? user.name : 'friend'}</h1>
      {lobby && lobby.map((lobbies)=>(

        <div key={lobbies._id}>
          <LobbyList 
          user={user}
          lobby={lobbies}
          handleDeleteLobbies={handleDeleteLobby}/>
        </div>
        

        <>
        <LobbyList key={lobbies._id} lobby={lobbies}/>
        </>

      ))}
    </main>
  )
  
}

export default Landing
