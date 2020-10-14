import React, { useState, useEffect } from "react"
import axios from "./axios"
import "./banner.css"

const baseImgUrl = "https://image.tmdb.org/t/p/original/"

function Banner(props) {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    async function getFeatMovie() {
      const request = await axios.get(props.featUrl)
      const randomFilms = request.data.results
      setMovie(randomFilms[Math.floor(Math.random() * randomFilms.length - 1)])
    }

    getFeatMovie()
  }, [])

  console.log("Featured Flick.", movie)

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str
  }

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseImgUrl}${movie?.backdrop_path}) `,
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">{movie?.title || movie?.name || movie?.original_name}</h1>

        <div className="banner-btns">
          {/* button.banner-btn*2 */}
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>

        <p className="banner-desc">{truncate(movie?.overview, 150)}</p>
      </div>

      <div className="fade-bottom"></div>
    </header>
  )
}

export default Banner
