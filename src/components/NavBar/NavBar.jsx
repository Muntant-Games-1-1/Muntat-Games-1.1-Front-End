import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../images/logo.png'
const NavBar = ({ user, handleLogout, handleGetAllLobby}) => {
  return(
    <>
    {user ? (
        <nav>
<Link onClick={handleGetAllLobby} to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
<div className={styles.navLinks}>
  <Link className={styles.link} to="/profiles">Profiles</Link>
  <Link className={styles.link} to="/create-lobby">Create A Lobby</Link>
  <Link className={styles.link} to="/add-game">Add A Game</Link>
  <Link className={styles.logout} to="" onClick={handleLogout}>Logout</Link>
</div>
</nav>
      )
      :
      <nav>
        <Link onClick={handleGetAllLobby} to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
        <div className={styles.navLinks}> 
          <Link  className={styles.link} to="/login">Login</Link>
          <Link  className={styles.link} to="/signup">Sign-up</Link>
        </div>
      </nav>
      
      
      
      }
      </>
  )
}

export default NavBar
