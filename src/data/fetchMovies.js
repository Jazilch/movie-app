'use es6';

import axios from 'axios';

const apiKey = 'be5d2bbcaae60ee07230ebcb86103021&';
const BASE_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`;

const fetchMovies = () => {
  return axios.get(BASE_URL);
};

export default fetchMovies;
