import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import {fetchMovies} from "../../services/movieService"

export default function App() {
 
  const [movies, setMovies] = useState([])

  const handleBubmit = (topic:string) => {
    setMovies(fetchMovies(topic));
  }
 
  return (
    <>
      <SearchBar onSubmit={handleBubmit} />
      </>

  )
}
