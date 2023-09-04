import React, { useState, useEffect } from "react";
import { fetchMovies } from "./MovieList";

import "../App.css";

function MovieTable() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Spider");
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetchMovies(searchTerm)
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [searchTerm]);

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchTerm(query);
    if (query === "") {
      setFilteredMovies(movies);
      return;
    }
    const newFilteredMovies = movies.filter((movie) =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredMovies(newFilteredMovies);
  };

  return (
    <div>
      <div className="search">
        <input
          type="text"
          placeholder="Search for a movie..."
          onChange={handleSearch}
        />
      </div>
      <table border="1">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>imdbID</th>
            <th>Type</th>
            <th>Poster</th>
          </tr>
        </thead>
        <tbody>
          {filteredMovies.map((movie) => (
            <tr key={movie.imdbID}>
              <td>{movie.Title}</td>
              <td>{movie.Year}</td>
              <td>{movie.imdbID}</td>
              <td>{movie.Type}</td>
              <td>
                <img src={movie.Poster} alt={movie.Title} width="100" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MovieTable;
