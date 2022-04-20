import { useState, useEffect, useRef } from 'react';
import styles from './AddAGame.module.css'

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
       <div className={styles.center}>
        <h1>Add A Game</h1>
      </div>
      <form
        onSubmit={handleSubmit}
        ref={formElement}
      >
        <div className={styles.gameForm} >
          <div className={styles.gameName}>
            <h3>Game Name</h3>
            <input
              required
              type="text"
              id='gameName'
              name='name'
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        {/* Player Limit Input */}
        <div className={styles.playerLimit}>
            <h3>Player Limit</h3>
            <input
              required
              type="number"
              id='maxPlayers'
              name='maxPlayers'
              value={formData.maxPlayers}
              onChange={handleChange}
            />
          </div>  

        {/* Game Description Input */}
        <div className={styles.description}>
            <h3>Description</h3>
            <textarea
              name="description"
              id="description"
              onChange={handleChange}
              value={formData.description}
              className={styles.biggerInput}
              required
              >
            </textarea>
          </div>
          <div className={styles.categories}>
            <h3>Categories</h3>
            <select
            name="categories"
              id="category"
              onChange={handleChange}
              >
                {categories && categories.map(category => (
                  <option key={category._id} value={category._id}>{category.name}
                  </option>
                ))}
            </select>
          </div>
          </div>
          <section className={styles.btnContainer}>
            <button
              type='submit'
              disabled={!validForm}
              className={styles.submitBtn}
              >
                Add Game
            </button>
          </section>
      </form>
    </>
  );
}
export default AddAGame;

