import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/messages`;

export async function createMessage(messageDetails) {
  const message = await fetch(BASE_URL, {
    method: "POST",
    headers: { 'content-type': 'application/json',
    'Authorization': `Bearer ${tokenService.getToken()}`
  },
    body: JSON.stringify(messageDetails)
  })
  return message.json()
};