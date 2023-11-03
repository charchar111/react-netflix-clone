const API_KEY = "d3c58d1a613576f719973e3aed9b3f27";
const BASE_URL = "https://api.themoviedb.org/3/";
const API_ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkM2M1OGQxYTYxMzU3NmY3MTk5NzNlM2FlZDliM2YyNyIsInN1YiI6IjY1NDI2MTYzNmJlYWVhMDBhYzFlMjQ1ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.6SPh_-iDUVTlJlJTpYDsMpya-v-zPHTf0mgSEjlfhwo";

export const getMovieDefault = function (endpoint: string) {
  return fetch(`${BASE_URL}${endpoint}?api_key=${API_KEY}`).then((resolve) =>
    resolve.json()
  );
};
