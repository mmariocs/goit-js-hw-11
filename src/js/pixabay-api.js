function fetchImages(query) {
  const apiKey = '45115917-7726aefcae109b05971acac93'
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