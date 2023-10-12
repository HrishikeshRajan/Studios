import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { getRunTimeInHours, extractYear } from '../utils/movieDetails';
import { Link } from 'react-router-dom';
import { encodeURI } from '../utils/uriEncoding';

const MovieDescription = () => {
  const movie = useSelector((store) => store.movies.selectedMovie);
  if (movie === null) return;

  const trailerUri = '/trailer/' + movie.id + '/' + movie.title;
  const modifiedTrailerUri = encodeURI(trailerUri);

  const genresLength = movie.genres.length - 1;
  return (
    <div className="text-white p-10 md:top-20 py-36 relative z-10 top-15 bg-gradient-to-r from-black    h-screen">
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
              {item.name + (index === genresLength ? '' : ' | ')}
            </span>
          ))}
        </li>
      </ul>

      <Link to={modifiedTrailerUri}>
        <button className="p-3 my-4 font-bold border-2 rounded hover:bg-white hover:text-black">
          <FontAwesomeIcon icon={faPlay} /> Trailer
        </button>
      </Link>
    </div>
  );
};

export default MovieDescription;
