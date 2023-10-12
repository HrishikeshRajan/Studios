import { addMovieTrailers, removeMovieTrailer } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = (props) => {
  const dispatch = useDispatch();

  const getMovieVideos = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${
        props.id || props.movieId
      }/videos?language=en-US`,
      OPTIONS,
    );

    const jsonVideos = await videos.json();

    //Select videos only of type Trailer
    const findTrailer = jsonVideos.results.find(
      (movie) => movie.type === 'Trailer',
    );

    //Selects the first video as random
    const trailer = findTrailer ? findTrailer : jsonVideos.results[0];

    dispatch(addMovieTrailers(trailer));
  };

  useEffect(() => {
    try {
      getMovieVideos();
    } catch (error) {
      console.log(error);
    }
    return () => {
      dispatch(removeMovieTrailer())
    }
  }, []);
};

export default useMovieTrailer;
