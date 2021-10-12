import axios from 'axios';
axios.defaults.baseURL = 'https://www.api.themoviedb.org/3/';
const apiKey = '93ab5af0b6f3bcde1224ca161062db06';
const key = `?api_key=${apiKey}`;

const fetchMovies = {
  fetchTrendingMoviesByDay() {
    return axios
      .get(`trending/movie/day${key}`)
      .then(response => response.data.results)
      .catch(error => error);
  },

  fetchSearchMovie(querySearch) {
    return axios
      .get(`search/movie${key}&page=1&include_adult=false&query=${querySearch}`)
      .then(response => response.data.results)
      .catch(error => error);
  },

  fetchMoviesById(movieId) {
    return axios
      .get(`movie/${movieId}${key}`)
      .then(response => response.data.results)
      .catch(error => error);
  },

  fetchMovieCast(movieId) {
    return axios
      .get(`movie/${movieId}/credits${key}`)
      .then(response => response.data.results)
      .catch(error => error);
  },

  fetchMovieReviews(movieId) {
    return axios
      .get(`movie/${movieId}/reviews${key}`)
      .then(response => response.data.results)
      .catch(error => error);
  },
};

export default fetchMovies;
