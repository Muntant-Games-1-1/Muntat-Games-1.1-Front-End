
import React from 'react';

function EditALobby(props) {
  return (
    <div>
      <h1>Edit A Lobby</h1>
import {useRef, useState, useEffect} from 'react';
// ! Change All The Input Values To Have The Pre-Edit Data
function EditALobby(props) {

function handleSubmit(e){
e.preventDefault()
}

function handleChange(){

}
const [validForm, setValidForm] =useState(true)
const [formData, setFormData] = useState(null)

const formElement = useRef()

  return (
    <div className='lobby-form'>
      <h1>Edit A Lobby</h1>
      <form onSubmit={handleSubmit} ref={formElement} autoComplete={false}>
        <label htmlFor="lobbyName">Lobby Name</label>
        <input
          required
          type="text"
          id='lobbyName'
          name='name'
          onChange={handleChange}
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
          onChange={handleChange} />
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