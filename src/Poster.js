import Youtube from "react-youtube"
import React, { useState, useEffect, useRef, useContext } from "react"
import movieTrailer from "movie-trailer"
import "./poster.css"
import axios from "./axios2"
import { MovieContext } from "./MovieContext"

const baseImgUrl = "https://image.tmdb.org/t/p/original/"

// options for the youtube react package
const opts = {
  height: "255px",
  width: "400px",
  playerVars: {
    autoplay: 1,
  },
  controls: 0,
  showinfo: 0,
}

function Poster(movie, isLargeRow, posterResults) {
  const [trailerUrl, setTrailerUrl] = useState("")
  const [hovered, setHovered] = useState()
  const posterOpts = useRef()
  const posterPic = useRef()
  const movieNotice = useRef()
  const [movieList, setMovieList] = useContext(MovieContext)

  if (window.location.pathname == "/search") {
    posterResults = true
  }

  //!function that shows trailer on hover
  async function handlePlay(e) {
    // e.target.parentNode.parentNode.childNodes[2].classList.add("image-hide")
    posterPic.current.classList.add("image-hide")
    controlToggle()

    if (movie) {
      try {
        await movieTrailer(movie.movie?.name || movie.movie?.title || movie.movie?.original_name).then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get("v"))
          console.log("Trailer URL", trailerUrl)
        })
      } catch {
        setTrailerUrl("862Pb9oDDAo")
      }
    }

    window.addEventListener("click", () => {
      posterPic.current.classList.remove("image-hide")
      setTrailerUrl()
    })

    window.addEventListener("keydown" || "click", (e) => {
      if (e.code == "Escape") {
        posterPic.current.classList.remove("image-hide")
        setTrailerUrl()
      }
    })
  }

  //! toggles the play and add buttons on a poster hover
  function controlToggle() {
    if (!trailerUrl && !posterOpts.current.classList.contains("opac-on")) {
      posterOpts.current.classList.add("opac-on")
    } else {
      posterOpts.current.classList.remove("opac-on")
    }
  }

  //! adds a movie to your list
  async function addMovie() {
    setMovieList([...movieList, { movie }])
    movieNotice.current.classList.add("notice-show")
    movieNotice.current.firstChild.innerHTML = `${movie.movie.original_name} added to watchlist`
    localStorage.setItem("myMovies", JSON.stringify(movieList))
    setTimeout(() => {
      movieNotice.current.classList.remove("notice-show")
    }, 3000)

    setTimeout(() => {
      movieNotice.current.firstChild.innerHTML = ""
    }, 4050)

    console.log("MOOOOOVIES", JSON.parse(localStorage.getItem("myMovies")))
  }

  return (
    <div
      className={posterResults ? "results poster-wrap" : "poster-wrap"}
      onMouseOver={controlToggle}
      onMouseOut={controlToggle}
    >
      <div className="movie-notice" ref={movieNotice}>
        <h3></h3>
      </div>
      <div className="controls" ref={posterOpts}>
        <i class="fas fa-play" onClick={handlePlay}></i>
        <i class="fas fa-plus" onClick={addMovie}></i>
      </div>
      <div className="hover-div"></div>
      <img
        ref={posterPic}
        src={`${baseImgUrl}${movie.movie.poster_path}`}
        alt={movie?.name || movie?.title || movie?.original_name}
        className={`poster-image`}
      />
      {trailerUrl ? <div className="poster-video poster-grow">{<Youtube videoId={trailerUrl} opts={opts} />}</div> : ""}
    </div>
  )
}

export default Poster
