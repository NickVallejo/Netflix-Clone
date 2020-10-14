import React from "react"

const baseImgUrl = "https://image.tmdb.org/t/p/original/"

function Sugg(movieSugg) {
  return (
    <div class="sugg">
      {<img className="sugg-poster" src={baseImgUrl + movieSugg.movieSugg.poster_path} alt="" />}
      <h3>{movieSugg.movieSugg.title}</h3>
    </div>
  )
}

export default Sugg
