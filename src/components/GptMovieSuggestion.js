import React from 'react';
import MovieList from './MovieList';
const GptMovieSuggestion = ({movies}) => {
  return (
    <div className=" bg-black  mx-2 my-4 rounded bg-opacity-90 ">
      <div className="p-1  relative z-20">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular" movies={movies.popular} />
        <MovieList title="Top Rated " movies={movies.topRated} />
        <MovieList title="Fantasy" movies={movies.nowPlayingMovies} />
        <MovieList title="Scientific" movies={movies.nowPlayingMovies} />
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
