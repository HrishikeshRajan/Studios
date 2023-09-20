import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/movieSlice';
import { OPTIONS, URL } from '../utils/constants';
import { useEffect } from 'react';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch()
const getNowPlayingMovies = async () => {
    
  let data = await fetch(URL, OPTIONS);
  let jsonData = await data.json();

  dispatch(addNowPlayingMovies(jsonData.results))
  return jsonData;
};
useEffect(() => {
getNowPlayingMovies();

}, []);
}

export default useNowPlayingMovies;