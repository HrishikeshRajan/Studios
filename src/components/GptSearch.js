import React from 'react';
import GptSearchBar from './GptSearchBar';
import GptMovieSuggestion from './GptMovieSuggestion';
import { Background } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={Background} alt="logo" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
