import axios from "axios"

// const apiKey = process.env.REACT_APP_APIKEY
// const baseUrl = process.env.REACT_APP_BASEURL

export const getMovieList = async () => {
  const movie = await axios.get(`https://api.themoviedb.org/3/movie/popular?page=1&api_key=94fd76b3a03c9092573a872b2e83d22e`)
  // const movie = await axios.get(`${baseUrl}/popular?api_key=${apiKey}`)
  return movie.data.results 
}

export const searchMovie = async (q) => {
  const search = await axios.get(`https://api.themoviedb.org/3/search/movie?query=${q}&page=1&api_key=94fd76b3a03c9092573a872b2e83d22e`)
  return search.data
}