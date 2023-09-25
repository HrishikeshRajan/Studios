import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/movieSlice';
import { OPTIONS, urlPopular } from '../utils/constants';
import { useEffect } from 'react';

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popular);
  const getNowPlayingMovies = async () => {
    let data = await fetch(urlPopular, OPTIONS);
    let jsonData = await data.json();

    dispatch(addPopularMovies(jsonData.results));
    return jsonData;
  };
  useEffect(() => {
    !popularMovies && getNowPlayingMovies();
  }, []);
};

export default usePopularMovies;
