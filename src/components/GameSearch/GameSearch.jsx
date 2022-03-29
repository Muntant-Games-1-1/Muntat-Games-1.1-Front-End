import React from 'react';
import './GameSearch.css'
function GameSearch({formData, handleChange, searchResults, handleGameSelection}) {
  return (
    <>
      <h3>Choose A Game</h3>
        <div
          className="search-container"
        >
        < input
            id='chooseGame'
            type='search'
            value={formData.game}
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