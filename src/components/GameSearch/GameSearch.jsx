import React from 'react';

function GameSearch({formData, handleChange, searchResults, handleGameSelection}) {
  return (
<>
<h3>Choose A Game</h3>
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
             {searchResults?.map(game => {
               return(
                <button
                  type='button'
                  className="searchResult"
                  key={game._id}
                  style={{width: '100%'}}
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