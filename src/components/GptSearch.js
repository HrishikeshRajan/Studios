import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { Background } from '../utils/constants';
import { useSelector } from 'react-redux';


const GptSearch = () => {
  const movies = useSelector((store)=>store.movies)
  return (
    <div>
      <div className="absolute -z-10">
        <img src={Background} alt="logo" className='h-screen w-screen object-cover' />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion movies={movies} />
    </div>
  );
};

export default GptSearch;
