import { useDispatch } from 'react-redux';
import {addUpCommingMovies } from '../utils/movieSlice';
import { OPTIONS, urlTopRated } from '../utils/constants';
import { useEffect } from 'react';

const useUpCommingMovies = () => {
    const dispatch = useDispatch()
const getUpCommingMovies = async () => {
    
  let data = await fetch(urlTopRated, OPTIONS);
  let jsonData = await data.json();

  dispatch(addUpCommingMovies (jsonData.results))
  return jsonData;
};
useEffect(() => {
    getUpCommingMovies ();

}, []);
}

export default useUpCommingMovies ;