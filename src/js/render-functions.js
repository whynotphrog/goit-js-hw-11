import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {
  const markup = images.map(img => `
    <li class="gallery-item">
      <a class="gallery-link" href="${img.largeImageURL}">
        <img 
          class="gallery-image"
          src="${img.webformatURL}" 
          alt="${img.tags}" 
        />
      </a>
      <ul class="meta">
        <li>Likes: ${img.likes}</li>
        <li>Views: ${img.views}</li>
        <li>Comments: ${img.comments}</li>
        <li>Downloads: ${img.downloads}</li>
      </ul>
    </li>
  `).join('');
  galleryContainer.insertAdjacentHTML('beforeend', markup);
  lightbox.refresh();
}
export function clearGallery() {
  galleryContainer.innerHTML = '';
}
export function showLoader() {
  loader.classList.add('is-visible');
}
export function hideLoader() {
  loader.classList.remove('is-visible');
}