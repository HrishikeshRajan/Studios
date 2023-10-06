import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSelectedMovieImages,addSelectedMovie, removeSelectedMovie, removeSelectedMovieImages } from '../utils/movieSlice'
import { OPTIONS, getMovieImageUrl, getMovieUrl } from '../utils/constants';
import { useEffect } from 'react';



const useMovieAndImages = () => {
    const dispatch= useDispatch()
    const param = useParams()
  
    useEffect(() => {
  
      dispatch(removeSelectedMovie())
      dispatch(removeSelectedMovieImages())
     fetch(getMovieImageUrl(param.id), OPTIONS)
     .then(res => res.json())
     .then(json => {
       dispatch(addSelectedMovieImages(json))})
     .catch(err => console.error('error:' + err));
  
     fetch(getMovieUrl(param.id), OPTIONS)
     .then(res => res.json())
     .then(json => {
       dispatch(addSelectedMovie(json))})
     .catch(err => console.error('error:' + err));
  
    },[])
  

}

export default useMovieAndImages