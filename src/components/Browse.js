import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { Header } from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpCommingMovies from '../hooks/useUpComming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

export const Browse = () => {
  //Check is subscribing to specific attribute will work or not
  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();
  useNowPlayingMovies();

  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};
