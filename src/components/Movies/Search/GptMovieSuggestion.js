import React from 'react';
import SearchMoviesResults from './SearchMoviesResults';

const GptMovieSuggestion = ({ movies }) => {
  return (
    <div className=" mx-2 my-4 h-full rounded bg-opacity-90 ">
      <div className="p-1  relative z-20">
        <SearchMoviesResults title={'Search Results...'} movies={movies} />
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
