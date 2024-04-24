import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector('ul.gallery');
//hoisting
const photosMarkup = createGalleryItem(galleryItems);

function createGalleryItem(array) {
  return array
    .map(({ preview, original, description }) => {
      return `
    <a class="gallery_item" href="${original}">
       <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>`;
    })
    .join('');
}
galleryContainer.insertAdjacentHTML('beforeend', photosMarkup);
const galleryHandler = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
galleryHandler.on('show.SimpleLightbox');
