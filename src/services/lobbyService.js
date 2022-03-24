const BASE_URL = 'http://localhost:3001/api/lobbies'

async function createLobby(lobbyDetails) {
  const details = await fetch(BASE_URL, {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(lobbyDetails)
  })
}