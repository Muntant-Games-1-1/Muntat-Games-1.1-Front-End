import {useRef, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'

function EditALobby({games, handleEditLobby}) {
  // All State & Constants
  const location = useLocation()
  const [validForm, setValidForm] =useState(true)
  const formElement = useRef()
  const [formData, setFormData] = useState(location.state)

  // Event Handlers
function handleSubmit(e){
e.preventDefault()
handleEditLobby(formData)
}

function handleChange(e){
  setFormData({...formData, [e.target.name] : e.target.value})
}
// Side Effects
useEffect(() =>{
  formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
}, [formData])

// Jsx
  return (
    <div className='lobby-form'>
      <h1>Edit A Lobby</h1>
      <form onSubmit={handleSubmit} ref={formElement}>
        <label htmlFor="lobbyName">Lobby Name</label>
        <input
          required
          type="text"
          id='lobbyName'
          name='name'
          onChange={handleChange}
          value={formData.name}
        />
        <label htmlFor="chooseGame">Choose A Game</label>
        <select id='chooseGame' onChange={handleChange} name='game'>
          {games && games.map(game => {
              if(game._id.toString() === location.state.game.toString()){
                return <option key={game._id} selected value={game._id}>{game.name}</option>
              } 
              return <option key={game._id} value={game._id}>{game.name}</option>
          })}
        </select>
        <label htmlFor="lobbyLimit">Player Limit</label>
        <input
          type="number"
          id='lobbyLimit'
          name='lobbyLimit'
          onChange={handleChange} 
          value={formData.lobbyLimit}
          required
          />
        <button type='submit' disabled={!validForm}>Update</button>
      </form>
    </div>
  );
}

export default EditALobby;