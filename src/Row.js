import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./row.css";

const baseImgUrl = "https://image.tmdb.org/t/p/original/";

function Row(props) {
  const [movies, setMovies] = useState([]);

  //A snippet of code which runs based on a specific condition/variable
  useEffect(() => {
    //if [], run once when the row loads and don't run again

    async function getData() {
      const request = await axios.get(props.fetchUrl);
      setMovies(request.data.results);
    }

    getData();
  }, [props.fetchUrl]);

  console.table(props.title, movies);

  return (
    <div className="row">
      <h2>{props.title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            //key is a native react attribute that allows a single element in a component to re-render
            key={movie.id}
            src={baseImgUrl + movie.poster_path}
            alt={movie.name}
            className="row-poster"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
