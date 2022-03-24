import { useState, useEffect, useRef } from 'react';

function MakeALobby({ handleCreateLobby }) {

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()
  // ! Make Sure To Set The Drop Down Menu Inputs Initial State To The First Selection
  const [formData, setFormData] = useState({
    lobbyName: '',
    chooseGame: '',
    lobbyLimit: '',
    playerRank: ''
  })

  // Action Handlers
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    handleCreateLobby(formData)
  }

  // Side-Effects
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Create A Lobby</h1>
      <form onSubmit={handleSubmit} ref={formElement}>
        <label htmlFor="lobbyName">Lobby Name</label>
        <input
          type="text"
          id='lobbyName'
          name='lobbyName'
          onChange={handleChange}
        />
        <label htmlFor="chooseGame">Choose A Game</label>
        <select id='choose-game' onChange={handleChange} name='chooseGame' value={formData.chooseGame}>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <label htmlFor="lobbyLimit">Player Limit</label>
        <input
          type="text"
          id='lobbyLimit'
          name='lobbyLimit'
          onChange={handleChange} />
        <label htmlFor="playerRank">Minimum Rank</label>
        <select id='playerRank' name='playerRank' onChange={handleChange}>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <button type='submit' disabled={!validForm}>Create</button>
      </form>
    </>
  );
}
export default MakeALobby;

