import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { Header } from './Header/Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpCommingMovies from '../hooks/useUpComming';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
import BottomBar from './BottomBar';

export const Browse = () => {

  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();
  useNowPlayingMovies();

  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className='relative '>
      <Header />
      {gptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
      <BottomBar />
    </div>
  );
};
