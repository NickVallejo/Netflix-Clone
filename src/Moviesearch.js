import React, { useEffect } from "react"
import axios from "./axios"
import Row from "./Row"

function Moviesearch({ url, test }) {
  useEffect(() => {
    async function getSearchResults() {
      const searchResults = await axios.get(url)
      console.log("Search movies", searchResults.data.results)
    }

    getSearchResults()
  }, [])

  return (
    <div class="search-row">
      <Row title="Search Results" fetchUrl={url} searchResults={true} />
    </div>
  )
}

export default Moviesearch
