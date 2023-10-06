import React from 'react';
import { useSelector } from 'react-redux';

const MoviePoster = () => {
  const movie = useSelector((store) => store.movies);


if(movie.selectedMovie === null || movie.selectedMovieImages == null) return
  return (
    <div className=' absolute top-0 left-0 right-0'>
      <div className="w-full h-full ">
        <img
          src={
            'https://image.tmdb.org/t/p/original' + movie.selectedMovieImages?.backdrops[0].file_path
          }
          className="w-full h-screen object-cover "
          alt="poster"
        />
      </div>
    </div>
  );
};

export default MoviePoster;
