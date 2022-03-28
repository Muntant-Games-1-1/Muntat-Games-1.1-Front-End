import * as tokenService from "./tokenService";
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/messages`;

export default async function createMessage(messageDetails, details) {
  messageDetails.lobby = details._id;
  const message = await fetch(BASE_URL, {
    method: "POST",
    headers: { 'content-type': 'application/json',
    'Authorization': `Bearer ${tokenService.getToken()}`
  },
    body: JSON.stringify(messageDetails)
  })
  const json = await message.json()
  return json
};

export async function getAllMessages() {
  const messages = await fetch(BASE_URL, {
    method: "GET",
    headers: {
      'content-type': 'application/json',
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  const json = await messages.json()
  return json;
};