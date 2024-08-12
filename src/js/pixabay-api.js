function fetchImages(query) {
  const apiKey = '45407925-ce6a1b403a4faf3a2586351fb'
  const searchParams = new URLSearchParams({
    key: apiKey,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  })

  const fetchUrl = `https://pixabay.com/api/?${searchParams}`

  return fetch(fetchUrl).then(response => {
    if (!response.ok) {
      throw new Error(response.status)
    }

    return response.json()
  })
}

export { fetchImages }