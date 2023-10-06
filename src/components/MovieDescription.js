import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { getRunTimeInHours, extractYear } from '../utils/movieDetails';

const MovieDescription = () => {
  const movie = useSelector((store) => store.movies.selectedMovie);
  if (movie === null) return;
  const genresLength = movie.genres.length - 1;
  return (
    <div className="text-white p-10 py-36 absolute z-10 top-15 bg-gradient-to-r from-black    h-screen">
      <ul>
        <li className="mb-8 p-2">
          <h1 className="text-5xl font-extrabold">{movie.title}</h1>
        </li>
        <li className="p-2">
          <h3 className="font-bold text-lg w-3/4">{movie.overview}</h3>
        </li>
        <li className="p-2 flex">
          <span className="text-slate-400 font-bold mr-6">
            {'IMDB ' + parseFloat(movie.vote_average.toFixed(1))}
          </span>

          <span className="text-slate-400  font-bold mr-6">
            {getRunTimeInHours(movie.runtime)}
          </span>
          <span className="text-slate-400  font-bold mr-6">
            {extractYear(movie.release_date)}
          </span>
        </li>
        <li className="p-2 flex">
          {movie.genres.map((item, index) => (
            <span className="text-white font-bold pr-5" key={item.id}>
              {item.name + (index === genresLength? '' : ' | ')}
            </span>
          ))}
        </li>
      </ul>

      <button className="p-3 my-4 font-bold rounded bg-white text-black">
        <FontAwesomeIcon icon={faPlay} /> Trailer
      </button>
    </div>
  );
};

export default MovieDescription;
