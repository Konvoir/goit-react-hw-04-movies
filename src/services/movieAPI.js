const API_KEY = 'd581ecf96a7f0232cfce4d2bd77ad6f4';
const BASE_URL = 'https://api.themoviedb.org/3';

async function fetchWithErrorHandling(url = '', config = {}) {
  const response = await fetch(url, config);
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export function fetchTrendingMovies() {
  return fetchWithErrorHandling(
    `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`,
  );
}

export function fetchSearchMovies(searchQuery) {
  return fetchWithErrorHandling(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${searchQuery}&page=1&include_adult=false`,
  );
}

export function fetchGetMovieDetails(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`,
  );
}
export function fetchGetMovieCredits(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`,
  );
}

export function fetchGetMovieReviews(movieId) {
  return fetchWithErrorHandling(
    `${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`,
  );
}

// import axios from 'axios';
// axios.defaults.baseURL = 'https://www.api.themoviedb.org/3/';
// const apiKey = '93ab5af0b6f3bcde1224ca161062db06';
// const key = `?api_key=${apiKey}`;

// const fetchMovies = {
//   fetchTrendingMoviesByDay() {
//     return axios
//       .get(`trending/movie/day${key}`)
//       .then(response => response.data.results)
//       .catch(error => error);
//   },

//   fetchSearchMovie(querySearch) {
//     return axios
//       .get(`search/movie${key}&page=1&include_adult=false&query=${querySearch}`)
//       .then(response => response.data.results)
//       .catch(error => error);
//   },

//   fetchMoviesById(movieId) {
//     return axios
//       .get(`movie/${movieId}${key}`)
//       .then(response => response.data.results)
//       .catch(error => error);
//   },

//   fetchMovieCast(movieId) {
//     return axios
//       .get(`movie/${movieId}/credits${key}`)
//       .then(response => response.data.results)
//       .catch(error => error);
//   },

//   fetchMovieReviews(movieId) {
//     return axios
//       .get(`movie/${movieId}/reviews${key}`)
//       .then(response => response.data.results)
//       .catch(error => error);
//   },
// };

// export default fetchMovies;
