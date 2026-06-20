import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './render-functions.js';

const searchForm = document.querySelector('.form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const searchQuery = form.elements['search-text'].value.trim();

  if (searchQuery === "") {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  // Підготовка інтерфейсу перед запитом
  clearGallery();
  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {
      // Перевірка, чи масив hits порожній
      if (data.hits.length === 0) {
        iziToast.error({
          message: 'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
        });
        return;
      }
      
      // Рендеринг карток, якщо зображення знайдені
      createGallery(data.hits);
    })
    .catch(error => {
      iziToast.error({
        title: 'Error',
        message: `Something went wrong: ${error.message}`,
        position: 'topRight',
      });
    })
    .finally(() => {
      // Лоадер ховаємо у будь-якому випадку (успіх чи помилка)
      hideLoader();
      form.reset();
    });
}