import React from 'react';

import { Header } from './Header';

import MoviePoster from './MoviePoster';
import MovieDescription from './MovieDescription';
import useMovieAndImages from '../hooks/useMovieAndImages';

const MovieView = () => {
  useMovieAndImages();

  return (
    <div>
      <Header />
      <div className="relative">
        <MoviePoster />
        <MovieDescription />
      </div>
    </div>
  );
};

export default MovieView;
