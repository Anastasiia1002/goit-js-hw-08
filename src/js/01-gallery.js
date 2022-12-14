import { galleryItems } from './gallery-items.js';
// Change code below this line
import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.js-gallery');

gallery.innerHTML = galleryItems
  .map(
    ({ original, preview, description }) =>
      `
     <a href="${original}" class="gallery__item">
     <img class="gallery__image" src="${preview}" alt="${description}"/>
     </a>
        `
  )
  .join('');

new SimpleLightbox('.js-gallery a', {
  captionsData: 'alt',
  captionsDelay: 250,
  captionPosition: 'bottom',
});
