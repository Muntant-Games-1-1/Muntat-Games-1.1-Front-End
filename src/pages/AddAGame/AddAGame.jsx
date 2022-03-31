import { useState, useEffect, useRef } from 'react';

function AddAGame({handleCreateGame, categories}) {

  // State Variables
  const [validForm, setValidForm] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    maxPlayers: '',
    description: '',
    // This is The Id For The First Item In The Dropdown. In Case They Create a Game Without Making Any Changes To Game Category, The Value Wont Be Empty
    categories: '623dbaa1c5a00f1dc67ec759'
  })
  // Element References 
  const formElement = useRef()

  // Event Handlers
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
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
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          cols="30"
          rows="10"
          onChange={handleChange}
          value={formData.description}
          required
          >
        </textarea>
        <label htmlFor="category">Categories</label>
        <select
         name="categories"
          id="category"
          onChange={handleChange}
          >
            {categories && categories.map(category => (
              <option key={category._id} value={category._id}>{category.name}</option>
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

