import React  from "react";

const LobbyList = ({lobby})=>{
  return(
    <>
    <h1> {lobby.name}</h1>
    <h1> {lobby._id}</h1>
    </>
  )
}

export default LobbyList