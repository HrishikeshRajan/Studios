import { useDispatch, useSelector } from 'react-redux';
import { addTopMovies } from '../utils/movieSlice';
import { OPTIONS, urlTopRated } from '../utils/constants';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRated = useSelector((store) => store.movies.topRated);
  const getTopRatedMovies = async () => {
    let data = await fetch(urlTopRated, OPTIONS);
    let jsonData = await data.json();

    dispatch(addTopMovies(jsonData.results));
    return jsonData;
  };
  useEffect(() => {
    !topRated && getTopRatedMovies();
  }, []);
};

export default useTopRatedMovies;
