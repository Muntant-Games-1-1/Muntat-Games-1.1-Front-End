import { useState, useEffect, useRef } from 'react';
import GameSearch from '../../components/GameSearch/GameSearch.jsx'
import * as GameService from '../../services/gameService'

function MakeALobby({ handleCreateLobby}) {
  
  // State , Constants, & Helper Functions
  const [games, setGames] = useState([])
  const [validForm, setValidForm] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const formElement = useRef()
  const [formData, setFormData] = useState({game: ''})
  const allGameNames = games?.map(game => game.name.toLowerCase()) ?? []
  function getGameId (gameName) {
    const correctGame = games.find(game => {
    return game.name.toLowerCase() === gameName.toLowerCase()
    })
    return correctGame._id
  }

// Action Handlers
function handleChange(e) {
  setFormData({ ...formData, [e.target.name]: e.target.value })
}

function handleSubmit(e) {
  e.preventDefault()
  // Make Sure User Enters A Valid Game Before Submitting
  if(!allGameNames.includes(formData.game.toLowerCase())) return alert('Please Choose A Valid Game')
  // Exchanging The Game Name With Its Id & Then Submitting Data
  const newId = getGameId(formData.game)
  handleCreateLobby({...formData, game: newId})
}

function handleGameSelection(e) {
  setFormData({...formData, game: e.target.textContent })
}

// Side-Effects
  useEffect(() =>{
  GameService.getAllGames()
  .then(games => {
  setGames(games.games)
  } )
  }, [])

  useEffect(() => {
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

  return (
    <>
      <h1>Create A Lobby</h1>
      <form
        onSubmit={handleSubmit}
        ref={formElement}
      >
        <h3>Lobby Name</h3>
        <input
          required
          type="text"
          id='lobbyName'
          name='name'
          onChange={handleChange}
        />
        < GameSearch
            formData={formData}
            handleChange={handleChange}
            searchResults={searchResults}
            handleGameSelection={handleGameSelection}
        />
        <h3>Player Limit</h3>
        <input
          type="number"
          id='lobbyLimit'
          name='lobbyLimit'
          onChange={handleChange}
          required
          />
        <button
          type='submit'
          disabled={!validForm}>
            Create
        </button>
      </form>
    </>
  );
}
export default MakeALobby;

