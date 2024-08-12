export default function createHttpRequest(options) {
  const queryString = new URLSearchParams(options).toString();
  const url = `https://pixabay.com/api/?${queryString}`;

  return fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      throw error;
    });
}