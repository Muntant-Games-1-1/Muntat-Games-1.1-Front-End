import { useState, useEffect, useRef } from 'react';

function MakeALobby({ handleCreateLobby, games }) {
  const [validForm, setValidForm] = useState(false)
  const [searchResults, setSearchResults] = useState([])
  const formElement = useRef()
  const [formData, setFormData] = useState({game: ''})

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

  useEffect(() =>{
    let searchedGames = games?.filter(game => {
      console.log(game.name.toLowerCase().includes(formData.game))
      if(game.name.toLowerCase().includes(formData.game)) return true
      return false
    })
    console.log(searchedGames)
    setSearchResults(searchResults)
  }, [formData, games])

// console.log('FormData.Game: ', formData.game)
// console.log('SEARCH RESULTS:' ,searchResults)

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
            value={formData.game}
            name='game'
            onChange={handleChange}
            required
            style={{width: '20vw', minWidth: '300px'}}
          />
          <div
           className="dropDown"
           style={{width: '20vw', minWidth: '300px', textAlign: 'center', maxHeight: '350px', overflow: 'auto'}}
           >
             {games?.map(game => {
               return(
                <button type='button' className="searchResult" key={game._id} style={{width: '100%'}}>
                <p>{game.name}</p>
                </button>
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

