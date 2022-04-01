import {useRef, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
import GameSearch from '../../components/GameSearch/GameSearch'
import styles from './EditALobby.module.css'
function EditALobby({games, handleEditLobby}) {
  // All State , Constants, & Helper Functions
  const location = useLocation()
  const [validForm, setValidForm] =useState(true)
  const [searchResults, setSearchResults] = useState([])
  const formElement = useRef()
  const [formData, setFormData] = useState({...location.state, game: location.state.game.name})
  const allGameNames = games?.map(game => (
    game.name.toLowerCase()
  ))
  function getGameId (gameName) {
    const correctGame = games.find(game => {
     return game.name.toLowerCase() === gameName.toLowerCase()
    })
    return correctGame._id
  }
  // Event Handlers

function handleChange(e){
  setFormData({...formData, [e.target.name] : e.target.value})
}

function handleGameSelection(e) {
  setFormData({...formData, game: e.target.textContent })
}
// Side Effects
useEffect(() =>{
  formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
}, [formData])

useEffect(() =>{
  let searchedGames = games?.filter(game => {
    // if the search bar is empty, the games will not display
    if(!formData.game) return false
    // if a user has the exact name of a valid game in the input, the dropdown wont show anything
    if(game.name.toLowerCase() === formData.game) return false
    if(game.name.toLowerCase().includes(formData.game)) return true
    return false
  })
  setSearchResults(searchedGames)
}, [formData, games])


function handleSubmit(e) {
  e.preventDefault()
  // Make Sure User Enters A Valid Game Before Submitting
  if(!allGameNames.includes(formData.game.toLowerCase())) return alert('Please Choose A Valid Game')
  // Exchanging The Game Name With Its Id & Then Submitting Data
  const newId = getGameId(formData.game)
  handleEditLobby({...formData, game: newId})
}

// Jsx
  return (
    <div className='lobby-form'>
      < div className={styles.center}>
      <h1>Edit A Lobby</h1>
      </div>
        
      <form onSubmit={handleSubmit} ref={formElement}  className={styles.makeALobby}>
        <div className={styles.allInputs}>
          <div className={styles.lobbyName}>
            <h3>Lobby Name</h3>
            <input
              required
              type="text"
              id='lobbyName'
              name='name'
              onChange={handleChange}
              value={formData.name}
              />
            </div>
            <div className={styles.playerLimit}>
              <h3>Player Limit</h3>
              <input
                type="number"
                id='lobbyLimit'
                name='lobbyLimit'
                onChange={handleChange} 
                value={formData.lobbyLimit}
                required
                />
            </div>
            <div className={styles.gameSearch}>
            < GameSearch
                formData={formData} 
                games={games}     
                handleChange={handleChange}
                searchResults={searchResults}
                handleGameSelection={handleGameSelection}
            />
            </div>
          </div>
          <div className={styles.button}>
          <button
           type='submit'
           disabled={!validForm}
           className={styles.createButton}
           >
             Update
          </button>
           </div>
      </form>
    </div>
  );
}

export default EditALobby;