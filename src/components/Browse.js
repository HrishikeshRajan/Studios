import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { Header } from './Header/Header';
import MainContainer from './Banners/MainContainer';
import SecondaryContainer from './Movies/SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpCommingMovies from '../hooks/useUpComming';
import Search from './Movies/Search/Search';
import { useSelector } from 'react-redux';
import BottomBar from './Footer/BottomBar';

export const Browse = () => {

  usePopularMovies();
  useTopRatedMovies();
  useUpCommingMovies();
  useNowPlayingMovies();

  const gptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div className='relative flex flex-col'>
      <Header />
      {gptSearch ? (
        <Search />
      ) : (
        <div className='relative mt-20'>
          <MainContainer />
          <SecondaryContainer />
        </div>
      )}
      <BottomBar />
    </div>
  );
};
