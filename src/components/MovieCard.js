import React from 'react';
import { IMG_CDN } from '../utils/constants';
import { Link } from 'react-router-dom';

const MovieCard = ({ title, moviePoster, id }) => {
  if (moviePoster === null) return;
  return (
    <li className={` w-full embla__slide `} key={id}>
    <Link to={'/movie/' + id}>
      <div className="w-32">
        <img
          className="h-full w-full object-cover "
          src={IMG_CDN + moviePoster}
          alt={title}
        />
      </div>
    </Link>
  </li>
  );
};

export default MovieCard;
