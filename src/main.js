import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'
import SimpleLightbox from 'simplelightbox'
import 'simplelightbox/dist/simple-lightbox.min.css'
import { fetchImages } from './js/pixabay-api'
import { displayImages } from './js/render-functions/'

const form = document.querySelector('.form')
const gallery = document.querySelector('.gallery')
const loader = document.querySelector('.loader')

const lightboxGallery = new SimpleLightbox('.gallery a', {})

form.addEventListener('submit', handleSearch)

function handleSearch(event) {
  event.preventDefault()

  const query = event.currentTarget[0].value.trim()

  if (!query) {
    return
  }

  gallery.innerHTML = ''
  loader.style.display = 'block'

  fetchImages(query)
    .then(data => displayImages(data, gallery, lightboxGallery))
    .catch(() => {
      iziToast.error({
        message:
          'An error occurred while fetching data. Please try again later.',
        messageColor: '#fafafb',
        messageSize: '16px',
        messageLineHeight: '1.5',
        backgroundColor: '#ef4040',
        position: 'topRight',
        progressBarColor: '#b51b1b',
      })
    })
    .finally(() => {
      loader.style.display = 'none'
    })
}