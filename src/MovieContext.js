import React, { useState, createContext } from "react"

export const MovieContext = createContext()

export function MovieProvider(props) {
  const [movieList, setMovieList] = useState([])
  return <MovieContext.Provider value={[movieList, setMovieList]}>{props.children}</MovieContext.Provider>
}
