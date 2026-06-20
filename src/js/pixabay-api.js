import axios from 'axios';

const API_KEY = '56192086-83055f2d7d7b11f9b3a937a1d';
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  const searchParams = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return axios.get(BASE_URL, { params: searchParams })
    .then(response => response.data);
}