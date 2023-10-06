import React from 'react';
import MovieCard from './MovieCard';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies }) => {
  if (movies === null) return;
  return (
    <div className="p-6 translate-x-0">
      <h1 className=" text-xm md:text-lg py-4 m-1 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex ">
          {movies.map((movie) => (
            <Link to={'/movie/' + movie.id} key={movie.id}>
              <MovieCard
                title={movie.title}
                movie={movie.poster_path}
                id={movie.id}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
