import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const SearchMoviesResults = ({ title, movies }) => {
  if (movies === null) return;
  return (
    <div className="p-6 translate-x-0">
      <h1 className=" text-xm md:text-lg py-4 m-1 text-white">{title}</h1>
      <div className="flex l">
        <div className="flex flex-wrap justify-center    items-center ">
          {movies.map((movie) => (
            <Link
              to={'/movie/' + movie.id}
              key={movie.id}
              className="m-2 transform transition duration-500  hover:scale-110"
            >
              <MovieCard
                title={movie.title}
                moviePoster={movie.poster_path ?? movie.poster_path}
                id={movie.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchMoviesResults;
