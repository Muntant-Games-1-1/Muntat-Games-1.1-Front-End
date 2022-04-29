import { useRef } from 'react'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import logo from '../../images/logo.png'
const NavBar = ({ user, handleLogout, handleGetAllLobby }) => {
  const mobileNav = useRef()
  function toggleNavBar() {
    if (mobileNav.current.style.display === '') {
      return mobileNav.current.style.display = 'flex'
    }
    mobileNav.current.style.display = ''
  }

  function closeMobileNavOnNavigation() {
    if (mobileNav.current.style.display === 'flex') {
      return mobileNav.current.style.display = ''
    }
  }
  return (
    <>
      <nav>
        <div className={styles.brand_name}>
          <Link onClick={handleGetAllLobby} to="/"><img src={logo} alt="logo" className={styles.logo} /></Link>
          <button
            className={styles.toggleButton}
            onClick={toggleNavBar}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </div>
        <div
          className={styles.navLinks}
          ref={mobileNav}
          onClick={e => closeMobileNavOnNavigation()}
        >
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
