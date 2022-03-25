import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'
import * as authService from './services/authService'
import * as lobbyService from './services/lobbyService'
import MakeALobby from './pages/MakeALobby/MakeALobby'
import AddAGame from './pages/AddAGame/AddAGame'
import LobbyList from './pages/LobbyList/LobbyList'
import EditALobby from './pages/EditALobby/EditALobby'
import * as gameService from './services/gameService'


const App = () => {
  // State Constants
  const [user, setUser] = useState(authService.getUser())
  const [lobby, setLobby] = useState([])
  const [categories, setCategories] = useState([])
  lobbyService.getAllLobby()

// Side Effects
  useEffect(()=>{
  lobbyService.getAllLobby()
    .then(allLobby => setLobby(allLobby))
}, [])

useEffect(() =>{
  gameService.getCategories()
    .then(categories => setCategories(categories))
}, [])
console.log(categories)

  const navigate = useNavigate()

  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  function handleCreateLobby(newLobby) {
    lobbyService.createLobby(newLobby)
      .then(lobby => {
        navigate('/')
      })
      .catch(navigate('/'))
  }

  function handleEditLobby() {
    console.log('Connected!')
  }

  function handleCreateGame() {
    console.log('Connected!')
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} lobby={lobby}/>} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
          path="/changePassword"
          element={user ? <ChangePassword handleSignupOrLogin={handleSignupOrLogin} /> : <Navigate to="/login" />}
        />
        <Route
          path="/create-lobby"
          element={user ? < MakeALobby handleCreateLobby={handleCreateLobby} /> : <Navigate to="/login" />}
        />
        <Route
          path="/edit-lobby"
          element={user ? < EditALobby handleEditLobby={handleEditLobby} /> : <Navigate to="/login" />}
        />
        <Route
          path="/add-game"
          element={user ? < AddAGame handleCreateGame={handleCreateGame} categories={categories}/> : <Navigate to="/login" />}
        />
      </Routes>
    </>
  )
}


export default App
