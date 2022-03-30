import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import * as lobbyService from "../../services/lobbyService";
import logo from '../../images/logo.png'
const NavBar = ({ user, handleLogout, handleGetAllLobby}) => {

  // return (
  //   <>
  //     {user ? (
  //       <nav className={styles.navbar}>
  //         <ul>
  //           <div className={styles.leftSide}>
  //           <li>
  //             <Link className={styles.link} onClick={handleGetAllLobby} to="/">
  //               <FontAwesomeIcon icon={faHome}></FontAwesomeIcon>
  //             </Link>
  //           </li>
  //           <li className={styles.active}>Welcome, {user.name}</li>
  //           <li>
  //             <div>
  //                 <img src={logo} alt="logo" className={styles.logo}/>
  //               </div>
  //             </li>
  //             </div>
  //           <div className={styles.divright}>
  //             <li>
  //               <Link className={styles.link} to="/profiles">
  //                 Profiles
  //               </Link>
  //             </li>
  //             <li>
  //               <Link className={styles.link} to="/changePassword">
  //                 Change Password
  //               </Link>
  //             </li>
  //             <li>
  //               <Link className={styles.link} to="/create-lobby">
  //                 Create a Lobby
  //               </Link>
  //             </li>
  //             <li>
  //               <Link className={styles.link} to="/add-game">
  //                 Add a Game
  //               </Link>
  //             </li>
  //             <li>
  //               <Link className={styles.link} to="" onClick={handleLogout}>
  //                 LOG OUT
  //               </Link>
  //             </li>
  //           </div>
  //         </ul>
  //       </nav>
  //     ) : (
  //       <nav className={styles.navbar}>
  //         <ul className="navbar">
  //           <li>
  //             <Link className={styles.link} to="/login">
  //               Log In
  //             </Link>
  //           </li>
  //           <li>
  //             <Link className={styles.link} to="/signup">
  //               Sign Up
  //             </Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     )}
  //   </>
  // );
  return(
    <>
    {user ? (
        <nav>
<Link onClick={handleGetAllLobby} to="/">Home</Link>
<Link onClick={handleGetAllLobby} to="/"><img src={logo} alt="logo" className={styles.logo}/></Link>
<Link className={styles.link} to="/profiles">Profiles</Link>
<Link className={styles.link} to="/create-lobby">Create A Lobby</Link>
<Link className={styles.link} to="/add-game">Add A Game</Link>
<Link className={styles.link} to="" onClick={handleLogout}>Logout</Link>
</nav>
      )
      :
      <nav>
        <Link  className={styles.link} to="/login">Login</Link>
        <Link  className={styles.link} to="/signup">Sign-up</Link>
      </nav>
      
      
      
      }
      </>
  )
}

export default NavBar
