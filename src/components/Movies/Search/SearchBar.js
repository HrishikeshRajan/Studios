import React, { useRef, useState } from 'react';
import { LANG } from '../../../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
// import { openai } from '../utils/openai';
// import { generateQuery } from '../../../utils/generateQuery';
import { OPTIONS, searchMovieByNameURI } from '../../../utils/constants';
import { addMovieSuggestions } from '../../../utils/movieSlice';
// import GptMovieSuggestion from './GptMovieSuggestion';

const SearchBar = () => {
  const appConfig = useSelector((store) => store.appConfig);

  const [suggestedMovies, setSuggestedMovies] = useState(null);

  const search = useRef();

  const dispatch = useDispatch();

  const searchForMovies = async (movie) => {
    try {
      const response = await fetch(searchMovieByNameURI(movie), OPTIONS);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error('Error fetching movie:', error);
      return undefined;
    }
  };

  const handleSearch = async () => {
    try {

      const result = await searchForMovies(search.current.value)
      if (result === null ) return;

      setSuggestedMovies(result);
      dispatch(addMovieSuggestions(result));
    } catch (error) {
      console.log('test best', error);
    }
  };

  return (
    <div className=" text-center absolute top-32 z-50 w-full  flex justify-center ">
      <form
        className=" w-full mx-1 md:w-1/2  rounded grid grid-cols-12"
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-3  m-2 col-span-9"
          placeholder={LANG[appConfig.language].gptSearchPlaceholder}
          ref={search}
        />

        <button
          className=" bg-red-900 text-white m-2 rounded col-span-3"
          onClick={handleSearch}
        >
          {LANG[appConfig.language].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
