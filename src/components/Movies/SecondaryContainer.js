import React from 'react';
import MovieList from './MovieCollection/MovieList';
import { useSelector } from 'react-redux';
import { LANG } from '../../utils/languageConstant';

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const language = useSelector((store) => store.appConfig.language);
  if (language === undefined) return;
  return (
    <div className="p-1 top-92 md:top-96 lg:top-[550px] inset-x-0 absolute z-40">
      <div>
        <MovieList  title={LANG[language.code].MovieListTitles.NOW_PLAYING_MOVIES} movies={movies.nowPlayingMovies} />
        <MovieList title={LANG[language.code].MovieListTitles.POPULAR_MOVIES} movies={movies.popular} />
        <MovieList title={LANG[language.code].MovieListTitles.TOP_RATED_MOVIES} movies={movies.topRated} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
