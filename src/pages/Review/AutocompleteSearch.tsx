import React, { useState } from 'react'

const TMDB_API_KEY = 'YOUR_TMDB_API_KEY';
const TMDB_API_URL = 'https://api.themoviedb.org/3';
const TMDB_SEARCH_URL = `${TMDB_API_URL}/search/movie`;

export const AutocompleteSearch = ({ onSelect }: any) => {
  const [searchText, setSearchText] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearchChange = async (event: any) => {
    const { value } = event.target;
    setSearchText(value);

    // Fetch movies based on search text
    const response = await fetch(`${TMDB_SEARCH_URL}?api_key=${TMDB_API_KEY}&query=${value}`);
    const data = await response.json();
    const results = data.results;

    setMovies(results);
  };

  return (
    <div>
      <input type="text" value={searchText} onChange={handleSearchChange} placeholder="Search for a movie" />

      {movies.length > 0 && (
        <ul>
          {movies.map((movie: any) => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};