import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../images/logo.png'
const NavBar = ({ user, handleLogout, handleGetAllLobby }) => {
  return (
    <>
      <nav>
        <div className={styles.brand_name}>
          <Link onClick={handleGetAllLobby} to="/"><img src={logo} alt="logo" className={styles.logo} /></Link>
          <button className={styles.toggleButton}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
        <div className={styles.navLinks}>
          <Link className={styles.link} to="/create-lobby">Create A Lobby</Link>
          {user ? (
            <>
              <Link className={styles.link} to="/add-game">Add A Game</Link>
              <Link className={styles.logout} to="" onClick={handleLogout}>Logout</Link>
            </>
          )
            : (
              <>
                <Link className={styles.link} to="/login">Login</Link>
                <Link className={styles.link} to="/signup">Sign-up</Link>
              </>
            )}
        </div>
      </nav>
    </>
  )
}

export default NavBar
