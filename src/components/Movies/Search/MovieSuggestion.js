import React from 'react';
import { Link } from 'react-router-dom';
import { IMG_CDN } from '../../../utils/constants';
import { useSelector } from 'react-redux';
import { LANG } from '../../../utils/languageConstant';

const MovieSuggestion = ({ movies }) => {
  const language = useSelector((store) => store.appConfig.language);
  if(language === undefined) return
  return (
    <div className="px-2  py-6 mt-32 w-full translate-x-0">
      <h1 className="text-xm md:text-lg mt-20 m-1 text-white">
        {LANG[language.code].SearchResults }
      </h1>
      <div className=" flex flex-wrap justify-center">
        {movies.map((movie) => {
          if (movie.poster_path) {
            return (
              <Link
                to={'/movie/' + movie.id}
                key={movie.id}
                className="p-2 m-1   lg:w-[240px]   rounded transform transition duration-500 hover:scale-110"
              >
                <div className="w-full   flex justify-center items-center ">
                  <img
                    className=" lg:w-full h-52 lg:h-auto object-cover rounded-md"
                    src={IMG_CDN + movie.poster_path}
                    alt={movie.title}
                  />
                  <div className=" flex flex-col lg:px-5 h-44 w-[200px] lg:hidden px-5">
                    <h1 className="text-lg font-bold text-white pt-1">
                      {movie.title}
                    </h1>
                    <span className="text-white pt-3">
                      <span className="text-slate-400">language</span>{' '}
                      {movie.original_language}
                    </span>
                    <div className='flex w-full pt-3 justify-start'>
                      <span className="text-white pr-5">
                        {movie.release_date.slice(0, 4)}
                      </span>
                      <span className="text-white">
                        {movie.vote_average.toFixed(1)}
                      </span>
                    </div>
                 
                  </div>
                </div>
              </Link>
            );
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default MovieSuggestion;
