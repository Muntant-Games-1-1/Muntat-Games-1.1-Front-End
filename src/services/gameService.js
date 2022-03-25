import * as tokenService from './tokenService'
const CATEGORIES_ENDPOINT = 'http://localhost:3001/api/categories'

export async function getCategories(){
  const categories = await fetch(CATEGORIES_ENDPOINT, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    }
  })
  return categories.json()
}
