import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addSelectedMovie, removeSelectedMovie,  addSelectedMovieCast } from '../utils/movieSlice'
import { OPTIONS, getMovieCastUrl, getMovieUrl } from '../utils/constants';
import { useEffect } from 'react';



const useMovie= () => {
    const dispatch= useDispatch()
    const param = useParams()
  
    useEffect(() => {
  
      dispatch(removeSelectedMovie())

        fetch(getMovieCastUrl(param.id), OPTIONS)
        .then(res => res.json())
        .then(json => {
          dispatch(addSelectedMovieCast(json))})
        .catch(err => console.error('error:' + err));
        
    
     fetch(getMovieUrl(param.id), OPTIONS)
     .then(res => res.json())
     .then(json => {
       dispatch(addSelectedMovie(json))})
     .catch(err => console.error('error:' + err));
  
    },[])
  

}

export default useMovie