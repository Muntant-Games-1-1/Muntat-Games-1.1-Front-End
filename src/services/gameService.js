import * as tokenService from './tokenService'
const BASE_URL = 'http://localhost:3001'
export async function getCategories(){
  const categories = await fetch(`${BASE_URL}/api/categories`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return categories.json()
}

export async function addGame(){
  const game = await fetch(`${BASE_URL}`, {
    method: 'POST', 
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
}
