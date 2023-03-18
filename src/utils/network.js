export const getApiResource = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.error('Could not fetch', res.status)
      return false
    }
    return await res.json()
  } catch (error) {
    console.error('Could not fetch.', error.message)
    return false
  }
}


// (async () => {
//   const body = await getApiResource(SWAPI_ROOT + SWAPI_PEOPLE)
//   console.log('body', body)
// })()

export const makeConcurrentRequest = async urls => {
  const ress = await Promise.all(urls.map(res => {
    return fetch(res).then(res => res.json())
  }))
  return ress
}
