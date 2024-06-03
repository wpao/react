import { useEffect } from "react"
import { getMovieList, searchMovie } from "./api"
import { useState } from "react"


const App = () => {
  const [popularMovies, setPopularMovies] = useState([])

  useEffect(() => {
    getMovieList().then((result) => {
      setPopularMovies(result)
    })
  }, [])

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <div key={i} className="w-[40%] md:w-1/4 m-3 mt-10 border border-red-500">
          <div>{movie.title}</div>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
          <div>{movie.release_date}</div>
          <div className="text-red-600">{movie.vote_average}</div>
        </div>
      )
    })
  }

  const search = async (q) => {
    if(q.length > 3){
      const query = await searchMovie(q)
      setPopularMovies(query.results)
    }
  }

  return (<>
    <section className="border border-red-500">
      <header>
        <h1>DEA MOVIE MANIA</h1>
        <input type="text" placeholder="cari filem..." className="" onChange={({target}) => search(target.value)} />
        <div className="flex flex-wrap justify-center">
          <PopularMovieList />
        </div>
      </header>
    </section>
  </>)
  
}

export default App
