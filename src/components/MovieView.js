import React from 'react';

import { Header } from './Header';

import MoviePoster from './MoviePoster';
import MovieDescription from './MovieDescription';

import MoreInfo from './MoreInfo';
import useMovie from '../hooks/useMovie';

const MovieView = () => {
  useMovie();

  return (
    <div>
      <Header />
      <div className="relative">
        <MoviePoster />
        <MovieDescription />
        <MoreInfo />
      </div>
    </div>
  );
};

export default MovieView;
