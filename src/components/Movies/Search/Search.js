import React from 'react';
import SearchBar from './SearchBar';
import MovieSuggestion from './MovieSuggestion';
import { Background } from '../../../utils/constants';
import { useSelector } from 'react-redux';

const Search = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div>
      {/* <div className="absolute  -z-10">
        <img
          src={Background}
          alt="logo"
          className="h-screen w-screen object-cover"
        />
      </div> */}
      <SearchBar />
      {movies.movieSuggestions && (
        <MovieSuggestion movies={movies.movieSuggestions?.results} />
      )}
    </div>
  );
};

export default Search;
