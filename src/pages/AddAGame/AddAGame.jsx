import { useState, useEffect, useRef } from 'react';

function AddAGame({handleCreateGame, categories}) {

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
    console.log(formData)
    handleCreateGame(formData)
  }

  // Side-Effects
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  return (
    <>
      <h1>Add A Game</h1>
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
          name='maxPlayers'
          value={formData.maxPlayers}
          onChange={handleChange}
        />

        {/* Selection For Game Category */}

      {/* Game Description Input */}
        <label htmlFor="description">Player Limit</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          required
          >
          {formData.description}
        </textarea>
        <label htmlFor="category">Player Limit</label>
        <select
         name="category"
          id="category"
          >
            <option value="">--Selection--</option>
            {categories && categories.map(category => (
              <option value={category._id}>category.name</option>
            ))}
        </select>
        <button
          type='submit'
          disabled={!validForm}>
            Add Game
        </button>
      </form>
    </>
  );
}
export default AddAGame;

