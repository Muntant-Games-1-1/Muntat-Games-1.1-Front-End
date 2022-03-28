import { useState, useEffect, useRef } from 'react';

function MakeALobby({ handleCreateLobby, games }) {
  const [validForm, setValidForm] = useState(false)
  const [gameInput, setGameInput] = useState({game: ''})
  const formElement = useRef()
  // ! Make Sure To Set The Drop Down Menu Inputs Initial State To The First Selection
  const [formData, setFormData] = useState({game: games?.[0]._id})

  // Action Handlers
  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  function handleChooseGame(e){
    setGameInput({ ...gameInput, [e.target.name]: e.target.value })
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
          required
          type="text"
          id='lobbyName'
          name='name'
          onChange={handleChange}
        />
        <label htmlFor="chooseGame">Choose A Game</label>
        <div
          className="search-container"
          style={{display: 'flex', flexDirection: 'column'}}>
        < input
            id='chooseGame'
            type='search'
            value={gameInput.game}
            name='game'
            onChange={handleChooseGame}
            required
            style={{width: '20vw', minWidth: '300px'}}
          />
          <div
           className="dropDown"
           style={{width: '20vw', minWidth: '300px', border: 'black 2px solid', textAlign: 'center'}}
           >
             {games?.map(game => {
               return(
                <div className="searchResult" key={game._id}>
                <p>{game.name}</p>
                </div>
                )
             })}
          </div>
             </div>
        {/* <select id='choose-game' onChange={handleChange} name='game' value={formData.chooseGame}>
          {games?.map(game =>(
              <option key={game._id} value={game._id}>{game.name}</option>
          ))}
        </select> */}
        <label htmlFor="lobbyLimit">Player Limit</label>
        <input
          type="number"
          id='lobbyLimit'
          name='lobbyLimit'
          onChange={handleChange} />
        <button type='submit' disabled={!validForm}>Create</button>
      </form>
    </>
  );
}
export default MakeALobby;

