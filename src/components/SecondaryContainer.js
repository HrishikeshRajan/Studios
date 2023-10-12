import React from 'react';
import MovieList from './MovieList';
import { useSelector } from 'react-redux';


const SecondaryContainer = () => {

  const movies = useSelector((store)=>store.movies)
  
  return (
    <div className='p-1 md:-top-40 inset-x-0  relative  z-40' >

      <div >
      < MovieList title='Now Playing' movies = {movies.nowPlayingMovies } />
       < MovieList title='Popular' movies = {movies.popular } />
       < MovieList title='Top Rated ' movies = {movies.topRated } />
       < MovieList title='Fantasy' movies = {movies.nowPlayingMovies } />
       < MovieList title='Scientific' movies = {movies.nowPlayingMovies } />
      </div>
    </div>
  );
};

export default SecondaryContainer;
