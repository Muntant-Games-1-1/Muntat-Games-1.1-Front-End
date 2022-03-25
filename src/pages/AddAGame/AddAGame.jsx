import { useState, useEffect, useRef } from 'react';

function AddAGame({handleCreateGame}) {

  // State Variables
  const [validForm, setValidForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    maxPlayers: '',
    description: ''
  })
  // Element References 
  const formElement = useRef()

  // Event Handlers
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
      <form
        onSubmit={handleSubmit}
        ref={formElement}
      >
        {/* Game Name Input */}
        <label htmlFor="gameName">Game Name</label>
        <input
          required
          type="text"
          id='gameName'
          name='name'
          value={formData.name}
          onChange={handleChange}
        />
       {/* Player Limit Input */}
        <label htmlFor="maxPlayers">Player Limit</label>
        <input
          required
          type="number"
          id='maxPlayers'
          name='name'
          value={formData.maxPlayers}
          onChange={handleChange}
        />
      {/* Game Description Input */}
        <label htmlFor="description">Player Limit</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10">
          {formData.description}
        </textarea>
        <button
          type='submit'
          disabled={!validForm}>
            Create
        </button>
      </form>
    </>
  );
}
export default AddAGame;

