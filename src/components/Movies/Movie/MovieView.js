import React from 'react';

import { Header } from '../../Header/Header';

import MoviePoster from './MoviePoster';
import MovieDescription from './MovieDescription';

import MoreInfo from './MoreInfo';
import useMovie from '../../../hooks/useMovie';
import BottomBar from '../../Footer/BottomBar';

const MovieView = () => {
  useMovie();

  return (
    <div>
      <Header />
      <div className="relative">
        <MoviePoster />
        <div className='relative'>
          <MovieDescription />
          <MoreInfo />
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default MovieView;
