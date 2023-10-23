import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import { getRunTimeInHours, extractYear } from '../../../utils/movieDetails';
import { Link } from 'react-router-dom';
import { encodeURI } from '../../../utils/uriEncoding';

const MovieDescription = () => {
  const movie = useSelector((store) => store.movies.selectedMovie);
  if (movie === null) return;

  const trailerUri = '/trailer/' + movie.id + '/' + movie.title;
  const modifiedTrailerUri = encodeURI(trailerUri);

  return (
    <div className="text-white px-1 top-2/3 md:top-20 py-36 relative z-10  bg-gradient-to-r from-black    h-screen">
      <ul>
        <li className="mb-8 flex justify-center lg:justify-start lg:px-10">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold">
            {movie.title}
          </h1>
        </li>
        <li className=" flex justify-center lg:justify-start lg:px-10">
          <h3 className="font-bold text-sm md:text-lg text-justify  lg:text-lg w-3/4">
            {movie.overview}
          </h3>
        </li>
        <li className="pb-5 flex justify-center pt-10 lg:justify-start lg:px-10">
          <div className="flex justify-evenly">
            <span className="text-slate-200 text-xs md:text-lg font-bold mr-6">
              {'IMDB ' + parseFloat(movie.vote_average.toFixed(1))}
            </span>

            <span className="text-slate-200  text-xs md:text-lg font-bold mr-6">
              {getRunTimeInHours(movie.runtime)}
            </span>
            <span className="text-slate-200  font-bold md:text-lg text-xs mr-6">
              {extractYear(movie.release_date)}
            </span>
          </div>
        </li>
        <li className="flex justify-center lg:justify-start lg:px-10">
          <div className="flex justify-evenly">
            {movie.genres.map((item, index) => (
              <span
                className="text-white text-xs font-bold md:text-lg mr-6"
                key={item.id}
              >
                {item.name}
              </span>
            ))}
          </div>
        </li>
      </ul>

      <div className='flex justify-center lg:justify-start lg:px-10'>
        <Link to={modifiedTrailerUri}>
          <button className="p-3 mt-10  text-xs md:text-lg font-bold border-2 rounded hover:bg-white hover:text-black">
            <FontAwesomeIcon icon={faPlay} /> Trailer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MovieDescription;
