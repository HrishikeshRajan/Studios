import React from 'react';
import MovieList from './movie/MovieList';
import { useSelector } from 'react-redux';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="p-1 md:-top-40 inset-x-0  relative  z-40">
      <div>
        <MovieList  title="Now playing movies" movies={movies.nowPlayingMovies} />
        <MovieList title="Popular movies" movies={movies.popular} />
        <MovieList title="Top rated movies" movies={movies.topRated} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
