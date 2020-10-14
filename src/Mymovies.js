import React, { useEffect, useContext } from "react"
import { MovieContext } from "./MovieContext"
import "./myMovies.css"

function MyMovies() {
  const [movieList, setMovieList] = useContext(MovieContext)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myMovies"))
    setMovieList(data)
    console.log(movieList.map((flick) => (
      <h1>{flick.movie.movie.original_name}</h1>
    )))
  }, [])

  return (
    <div className="movie-sidebar">
      {movieList.map((flick) => (
        // <h1>{flick.movie.movie.original_name}</h1>
        console.log(flick.movie.movie.original_name)
      ))}
    </div>
  )
}

export default MyMovies
