import React, { useRef, useState } from 'react';
import { LANG } from '../utils/languageConstant';
import { useDispatch, useSelector } from 'react-redux';
// import { openai } from '../utils/openai';
import { generateQuery } from '../utils/generateQuery';
import { OPTIONS, searchMovieByNameURI } from '../utils/constants';
import { addMovieSuggestions } from '../utils/movieSlice';

const GptSearchBar = () => {
  const appConfig = useSelector((store) => store.appConfig);
  const [suggestedMovies, setSuggestedMovies] = useState(null)

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
    // async function main() {
    //   const chatCompletion = await openai.chat.completions.create({
    //     messages: [{ role: 'user', content: query }],
    //     model: 'gpt-3.5-turbo',
    //   });

    //   console.log(chatCompletion.choices);
    // }

    const result = generateQuery(search.current.value);

    const mockGPT = {
      choices: [
        {
          message: {
            content: 'Twilight, Narnia, Fast and Furious, Scream, Invitation',
          },
        },
      ],
    };

     try {
      const movies = mockGPT.choices[0]?.message?.content.split(',');

      const movieResult = movies.map((movie) => searchForMovies(movie));
      const results = await Promise.all(movieResult);
  
      if(result.includes( undefined)) return
  
      setSuggestedMovies(results)
      dispatch(addMovieSuggestions(results));
     } catch (error) {
      console.log('test best', error)
     }

    // main();
  };
  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center ">
      <form
        action=""
        className=" w-screen mx-1 md:w-1/2 bg-black rounded grid grid-cols-12"
        method="post"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className="p-3  m-2 col-span-9"
          placeholder={LANG[appConfig.language].gptSearchPlaceholder}
          id=""
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

export default GptSearchBar;
