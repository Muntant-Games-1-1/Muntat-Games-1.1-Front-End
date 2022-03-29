import React from 'react';
import './GameSearch.css'
function GameSearch({formData, handleChange, searchResults, handleGameSelection}) {

  console.log(formData.game)
  return (
    <>
      <h3>Choose A Game</h3>
        <div
          className="search-container"
        >
        < input
            id='chooseGame'
            type='search'
            // IF formData.game.name is not undefined, the that is the value, otherwise formData.game is the value
            value={formData.game?.name ?? formData.game}
            name='game'
            onChange={handleChange}
            required
          />
          <div
            className="dropDown"
          >
            {searchResults?.map(game => {
              return(
                <button
                  type='button'
                  className="searchResult"
                  key={game._id}
                  onClick={handleGameSelection}
                >
                <p>{game.name}</p>
                </button>
                )
            })}
          </div>
            </div>
    </>
  );
}

export default GameSearch;