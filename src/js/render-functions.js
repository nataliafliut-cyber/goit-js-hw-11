import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

// Оголошуємо змінну для лінзи, але не ініціалізуємо її одразу на порожньому DOM
let lightbox = null;

export function createGallery(images) {
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <div class="info-container">
          <p class="info-item"><b>Likes</b><span>${likes}</span></p>
          <p class="info-item"><b>Views</b><span>${views}</span></p>
          <p class="info-item"><b>Comments</b><span>${comments}</span></p>
          <p class="info-item"><b>Downloads</b><span>${downloads}</span></p>
        </div>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  // Ініціалізуємо лише тоді, коли з'явилися перші елементи
  if (!lightbox) {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  } else {
    // Якщо вже ініціалізовано — просто оновлюємо
    lightbox.refresh();
  }
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  if (loader) loader.classList.remove('is-hidden');
}

export function hideLoader() {
  if (loader) loader.classList.add('is-hidden');
}