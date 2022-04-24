const baseUrl = 'https://api.github.com'

export async function getAllOrgs() {
  let data
  try {
    const response = await fetch(`${baseUrl}/organizations`)

    data = await response.json()
  } catch (err) {
    console.error(err)
  }

  return data
}

export async function getOrgDetail(orgName: string) {
  let data
  try {
    const response = await fetch(`${baseUrl}/orgs/${orgName}`)

    data = await response.json()
  } catch (err) {
    console.error(err)
  }

  return data
}
