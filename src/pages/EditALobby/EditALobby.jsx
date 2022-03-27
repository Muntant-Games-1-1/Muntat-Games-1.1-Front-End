
import {useRef, useState, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
// ! Change All The Input Values To Have The Pre-Edit Data
function EditALobby(props) {
  const location = useLocation()
  const [validForm, setValidForm] =useState(true)
  const formElement = useRef()
  const [formData, setFormData] = useState(location.state)

function handleSubmit(e){
e.preventDefault()
}

function handleChange(e){
  setFormData({...formData, [e.target.name] : e.target.value})
}

useEffect(() =>{
  formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
}, [formData])
console.log('Form Data Here:', formData)
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
        <select id='choose-game' onChange={handleChange} name='chooseGame' value={formData?.chooseGame}>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <label htmlFor="lobbyLimit">Player Limit</label>
        <input
          type="text"
          id='lobbyLimit'
          name='lobbyLimit'
          onChange={handleChange} 
          value={formData.lobbyLimit}
          />
        <label htmlFor="playerRank">Minimum Rank</label>
        <select id='playerRank' name='playerRank' onChange={handleChange}>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <button type='submit' disabled={!validForm}>Update</button>
      </form>
    </div>
  );
}

export default EditALobby;