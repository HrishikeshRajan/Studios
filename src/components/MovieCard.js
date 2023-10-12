import React from 'react';
import { IMG_CDN } from '../utils/constants';

const MovieCard = ({ title, moviePoster, id }) => {
  if (moviePoster === null) return;
  return (
    <div className="w-48 mx-1 ">
      <img src={IMG_CDN + moviePoster} alt={title} />
    </div>
  );
};

export default MovieCard;
