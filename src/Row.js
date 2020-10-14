import React, { useState, useEffect, useContext } from "react"
import ReactDOM from "react-dom"
import axios from "./axios"
import "./row.css"
import Poster from "./Poster"

function Row({ fetchUrl, title, searchResults }) {
  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])

  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads and don't run again

    async function getData() {
      const request = await axios.get(fetchUrl)
      setMovies(request.data.results)
    }

    getData()
  }, [fetchUrl])

  console.log("filtered movies", filteredMovies)

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>

      <div className={searchResults ? "no-overflow-posters" : "row-posters"}>
        {movies
          .filter((movie) => movie.poster_path !== null)
          .map((filteredMovie) => (
            <Poster movie={filteredMovie} posterResults={searchResults} />
          ))}
      </div>
    </div>
  )
}

export default Row
