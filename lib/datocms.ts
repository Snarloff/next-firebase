const API_URL = 'https://graphql.datocms.com/'
const API_TOKEN = process.env.DATOCMS_READ_ONLY_API_TOKEN

async function fetchCmsAPI(query: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${API_TOKEN}` },
    body: JSON.stringify({
      query
    })
  })

  const json = await res.json()

  if (json.errors) {
    throw new Error('Failed to fetch API')
  }

  return json.data

}

export async function getAllTechnologies() {
  const data = await fetchCmsAPI(`
    {
      allTechnologies {
        id
        name
        defaultVisible
        logo {
          url(imgixParams: {fm: jpg, fit: crop, w: 120, h: 120})
        }
      }
    }
  `)
  
  return data.allTechnologies

}

export default { getAllTechnologies }