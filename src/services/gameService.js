const CATEGORIES_ENDPOINT = 'http://localhost:3001/api/categories'

export async function gameCategories(){
  const categories = await fetch(CATEGORIES_ENDPOINT)
  return categories.json()
}
