import { useState, useEffect, useRef } from 'react';

function AddAGame({handleCreateGame}) {

  const [validForm, setValidForm] = useState(false)

  const formElement = useRef()
  // ! Make Sure To Set The Drop Down Menu Inputs Initial State To The First Selection
  const [formData, setFormData] = useState({
    name: '',
    maxPlayers: '',
    description: ''
  })

  // Action Handlers
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    // handleCreateLobby(formData)
  }

  // Side-Effects
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Create A Lobby</h1>
      <form onSubmit={handleSubmit} ref={formElement}>
        <label htmlFor="gameName">Game Name</label>
        <input
          required
          type="text"
          id='gameName'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
        {/* ===================== */}
        <label htmlFor="maxPlayers">Player Limit</label>
        <input
          required
          type="number"
          id='maxPlayers'
          name='name'
          value={formData.maxPlayers}
          onChange={handleChange}
        />

        {/* ======================== */}
        <label htmlFor="lobbyLimit">Player Limit</label>
        
        <button type='submit' disabled={!validForm}>Create</button>
      </form>
    </>
  );
}
export default AddAGame;

