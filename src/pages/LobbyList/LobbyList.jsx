import React  from "react";

const LobbyList = ({lobby, handleDeleteLobbies})=>{
  return(
    <>
    <h1> {lobby.name}</h1>
    <button onClick={()=> handleDeleteLobbies(lobby._id)}>
            Delete
          </button>
    </>
  )
}

export default LobbyList