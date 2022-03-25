import React  from "react";

const LobbyList = ({lobby, handleDeleteLobbies, user})=>{
  console.log('hey',lobby?.owner?.name);
  return(
    <>
    {/* { console.log('hello',lobby.owner.name)} */}
    <h1> {lobby?.owner?.name}</h1>
    {/* <h1>{user.name}</h1> */}
    <button onClick={()=> handleDeleteLobbies(lobby._id)}>
            Delete
          </button>
    </>
  )
}

export default LobbyList