import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h2 className="content">Netflix</h2>
      <Row title="NETFLIX ORIGINALS" fetchUrl={requests.getOriginals} />
      <Row title="Trending Now" fetchUrl={requests.getTrending} />
      <Row title="Top Rated" fetchUrl={requests.getOriginals} />
      <Row title="Action Movies" fetchUrl={requests.getAction} />
      <Row title="Comedy Movies" fetchUrl={requests.getComedy} />
      <Row title="Horror Movies" fetchUrl={requests.getHorror} />
      <Row title="Romance Movies" fetchUrl={requests.getRomance} />
      <Row title="Documentaries" fetchUrl={requests.getDocs} />
    </div>
  );
}

export default App;
