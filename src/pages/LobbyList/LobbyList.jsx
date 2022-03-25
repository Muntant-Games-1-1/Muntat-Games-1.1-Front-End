import React  from "react";

const LobbyList = ({lobby, handleDeleteLobbies, user})=>{
  return(
    <>
    <h1> {lobby.name}</h1>
    <h1>{user.name}</h1>
    <button onClick={()=> handleDeleteLobbies(lobby._id)}>
            Delete
          </button>
    </>
  )
}

export default LobbyList