import React  from "react";
import {Link } from 'react-router-dom'
const LobbyList = ({lobby, handleDeleteLobbies, user})=>{
  return(
    <>
      <h1> {lobby?.owner?.name}</h1>
      <h1>{lobby?.name}</h1>
      <button onClick={()=> handleDeleteLobbies(lobby._id)}>
              Delete
      </button>
      < Link to="/edit-lobby" state={lobby}>
        Update Lobby
      </Link>
    </>
  )
}

export default LobbyList