import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ user, handleLogout }) => {
  return (
    <>
      {user ? (
        <nav className={styles.navbar}>
          <ul>
            <li>
              <Link className={styles.link} to="/">
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
              </Link>
            </li>
            <li className={styles.welcome}>Welcome, {user.name}</li>
            <li>
              <Link className={styles.link} to="/profiles">
                Profiles
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/changePassword">
                Change Password
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/create-lobby">
                Create a Lobby
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="" onClick={handleLogout}>
                LOG OUT
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className={styles.navbar}>
          <ul className="navbar">
            <li>
              <Link className={styles.link} to="/login">
                Log In
              </Link>
            </li>
            <li>
              <Link className={styles.link} to="/signup">
                Sign Up
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
}

export default NavBar
