import { useDispatch } from 'react-redux';
import {addTopMovies } from '../utils/movieSlice';
import { OPTIONS, urlTopRated } from '../utils/constants';
import { useEffect } from 'react';

const useTopRatedMovies = () => {
    const dispatch = useDispatch()
const getTopRatedMovies = async () => {
    
  let data = await fetch(urlTopRated, OPTIONS);
  let jsonData = await data.json();

  dispatch(addTopMovies(jsonData.results))
  return jsonData;
};
useEffect(() => {
    getTopRatedMovies ();

}, []);
}

export default useTopRatedMovies ;