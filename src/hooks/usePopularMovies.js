import { useDispatch } from 'react-redux';
import {addPopularMovies } from '../utils/movieSlice';
import { OPTIONS, URL, urlPopular } from '../utils/constants';
import { useEffect } from 'react';

const usePopularMovies = () => {
    const dispatch = useDispatch()
const getNowPlayingMovies = async () => {
    
  let data = await fetch(urlPopular, OPTIONS);
  let jsonData = await data.json();

  dispatch(addPopularMovies(jsonData.results))
  return jsonData;
};
useEffect(() => {
getNowPlayingMovies();

}, []);
}

export default usePopularMovies ;