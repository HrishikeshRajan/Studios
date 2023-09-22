
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import { Header } from './Header';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRated';
import useUpCommingMovies from '../hooks/useUpComming';

export const Browse = () => {


  //Check is subscribing to specific attribute will work or not
  usePopularMovies()
  useTopRatedMovies()
  useUpCommingMovies()
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};
