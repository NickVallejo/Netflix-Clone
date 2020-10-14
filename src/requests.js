const API_KEY = "40725ed7a5ff3da4188101844992db9a"
const EX_REQ = "https://api.themoviedb.org/3/movie/550?api_key=40725ed7a5ff3da4188101844992db9a"

const requests = {
  getTrending: `/trending/all/week?api_key=${API_KEY}&lanuage=en-US`,
  getOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
  getTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  getAction: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  getComedy: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  getHorror: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  getRomance: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  getDocs: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  searchMovies: `/search/movie?api_key=${API_KEY}&query=`,
}

export default requests
