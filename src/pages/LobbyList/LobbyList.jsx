import React  from "react";

const LobbyList = ({lobby, handleDeleteLobbies, user})=>{
  return(
    <>
    <h1> {lobby?.owner?.name}</h1>
    <button onClick={()=> handleDeleteLobbies(lobby._id)}>
            Delete
          </button>
    </>
  )
}

export default LobbyList