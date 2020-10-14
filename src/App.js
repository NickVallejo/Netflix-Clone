import React, { useState, useEffect, useContext, useRef } from "react"
import "./App.css"
import Row from "./Row"
import Banner from "./Banner"
import Nav from "./Nav"
import requests from "./requests"
import MovieSearch from "./Moviesearch"
import MyMovies from "./Mymovies"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { MovieProvider } from "./MovieContext"

function App() {
  const [search, setUserSearch] = useState("")

  useEffect(() => {
    setUserSearch(localStorage.getItem("mySearch"))
  }, [])

  return (
    <MovieProvider>
      <Nav search={search} setUserSearch={setUserSearch} />
      <MyMovies />
      <Router>
        <Route
          path="/"
          exact
          render={(props) => (
            <div className="app">
              <Banner featUrl={requests.getOriginals} />
              <div className="row-group">
                <Row title="NETFLIX ORIGINALS" fetchUrl={requests.getOriginals} isLargeRow />
                <Row title="Trending Now" fetchUrl={requests.getTrending} isLargeRow />
                <Row title="Top Rated" fetchUrl={requests.getTopRated} isLargeRow />
                <Row title="Action Movies" fetchUrl={requests.getAction} isLargeRow />
                <Row title="Comedy Movies" fetchUrl={requests.getComedy} isLargeRow />
                <Row title="Horror Movies" fetchUrl={requests.getHorror} isLargeRow />
                <Row title="Romance Movies" fetchUrl={requests.getRomance} isLargeRow />
                <Row title="Documentaries" fetchUrl={requests.getDocs} isLargeRow />
              </div>
            </div>
          )}
        />
        <Route path="/search">
          <div className="movie-notice">
            <h1></h1>
          </div>
          <MovieSearch url={`${requests.searchMovies}${localStorage.getItem("mySearch")}`} test={"hello"} />
        </Route>
      </Router>
    </MovieProvider>
  )
}

export default App
