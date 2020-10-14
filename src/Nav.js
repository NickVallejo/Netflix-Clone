import React, { useState, useEffect, useRef } from "react"

import "./nav.css"
import axios from "./axios"
import requests from "./requests"
import Sugg from "./Sugg"
import history from "./history"

function Nav({ search, setUserSearch, history }) {
  const [show, handleShow] = useState(false)
  const [searchOn, setSearch] = useState(false)
  const [suggs, setSuggs] = useState([])
  const [suggsOn, setSuggsOn] = useState(false)
  const inputRef = useRef()

  useEffect(() => {
    function suggsAnim() {
      console.log("hello")
    }

    suggsAnim()
  }, [searchOn])

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  })

  function searchToggle(e) {
    setSearch(!searchOn)
  }

  window.addEventListener("keydown", (e) => {
    if (e.code == "Enter" && inputRef.current) {
      localStorage.setItem("mySearch", inputRef.current.value)
      console.log("LOCAL", localStorage.getItem("mySearch"))
      window.location.pathname = "/search"
      // const request = await axios.get(requests.searchMovies + search)
      // setSuggs(request.data.results)
    }
  })

  return (
    //show && means that if show is true, whatever follows the && will be returned
    <div className={`nav ${show && "nav-black"}`}>
      <a href="/"><img className="logo" src="../netflix.png" alt="Netflix Logo" /></a>
      <div className="nav-right">
        {/* <form action="" className="search-form" onsubmit="return false"> */}
        <i class={`fas fa-search ${searchOn && "icon-right"}`} onClick={searchToggle}></i>
        <input
          type="text"
          ref={inputRef}
          className={`search ${searchOn && "search-big"}`}
          placeholder="Search for a movie title..."
        />
        {/* </form> */}
        <img
          className="avatar"
          src="https://occ-0-344-999.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABR8DzEDMx6x6rgkSexM2EYh44oQISc8fyEFr6WnraR9_HyniHFDRbXRrElpLThfL9OYFOueAItK7VIEb2xH7AqA.png?r=c71"
          alt="Profile"
        />
      </div>

      <div class={`sugg-wrap ${suggsOn && "sugg-wrap-show"}`}>
        {suggs.map((sugg) => (
          <Sugg movieSugg={sugg} />
        ))}
      </div>
    </div>
  )
}

export default Nav
