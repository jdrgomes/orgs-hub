const baseUrl = 'https://api.github.com'

export async function getAllOrgs() {
  const response = await fetch(`${baseUrl}/organizations`)

  if (response.status !== 200) {
    throw new Error('cannot fetch data')
  }

  const data = await response.json()

  return data
}
