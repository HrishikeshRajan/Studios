import { useDispatch, useSelector } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { OPTIONS, URL } from '../utils/constants';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (store) => store.movies.nowPlayingMovies,
  );
  const getNowPlayingMovies = async () => {
    let data = await fetch(URL, OPTIONS);
    let jsonData = await data.json();

    dispatch(addNowPlayingMovies(jsonData.results));
    return jsonData;
  };
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
