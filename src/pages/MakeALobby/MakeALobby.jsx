import React from 'react';

function MakeALobby(props) {

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <h1>Create A Lobby</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="lobby-name">Lobby Name</label>
        <input type="text" id='lobby-name' />
        <label htmlFor="lobby-name">Choose A Game</label>
        <select id='lobby-name'>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <label htmlFor="lobby-limit">Player Limit</label>
        <input type="text" id='lobby-limit' />
        <label htmlFor="player-rank">Minimum Rank</label>
        <select id='player-rank'>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
          <option value="sample">sample</option>
        </select>
        <button type='submit'>Create</button>
      </form>
    </>
  );
}

export default MakeALobby;