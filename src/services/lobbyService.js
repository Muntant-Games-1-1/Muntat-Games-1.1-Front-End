import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/lobbies`

export async function createLobby(lobbyDetails) {
  const details = await fetch(BASE_URL, {
    method: "POST",
    headers: { 'content-type': 'application/json',
    'Authorization': `Bearer ${tokenService.getToken()}`
  },
    body: JSON.stringify(lobbyDetails)
  })
  return details.json()
};

export async function getAllLobby() {
  return fetch(BASE_URL)
  .then(res => res.json())
}
export async function deleteOneLobby(id) {
  return fetch(`${BASE_URL}/${id}`,{
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  .then(res => res.json())
}



export async function updateLobby(lobbyDetails) {
  const lobby = await fetch(`${BASE_URL}/${lobbyDetails._id}`, {
    method: 'PUT', 
    headers: { 
    'content-type': 'application/json',
    'Authorization': `Bearer ${tokenService.getToken()}`
  },
  body: JSON.stringify(lobbyDetails)
  })
  return lobby.json()
  } 

  export async function joinLobby(lobby_id){
    const joinLobby = await fetch(`${BASE_URL}/${lobby_id}/join`, {
      method: 'PUT',
      headers: { 
        'content-type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`
      }      
    })
    return joinLobby.json()
  }