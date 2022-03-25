import React  from "react";


const LobbyList = ({lobby, handleDeleteLobbies, user})=>{
  return(
    <>
    <h1> {lobby?.owner?.name}</h1>
    <button onClick={()=> handleDeleteLobbies(lobby._id)}>
            Delete
          </button>

const LobbyList = ({lobby})=>{
  return(
    <>
    <h1> {lobby.name}</h1>
    <h1> {lobby._id}</h1>

    </>
  )
}

export default LobbyList