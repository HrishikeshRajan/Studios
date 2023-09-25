import { addMovieTrailers } from '../utils/movieSlice';
import { OPTIONS } from '../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const useMovieTrailer = (props) => {
  const dispatch = useDispatch();

  const trailers = useSelector((store) => store.movies.trailers);

  const getMovieVideos = async () => {
    const videos = await fetch(
      `https://api.themoviedb.org/3/movie/${props.movieId}/videos?language=en-US`,
      OPTIONS,
    );

    const jsonVideos = await videos.json();

    const findTrailer = jsonVideos.results.find(
      (movie) => movie.type === 'Trailer',
    );

    const trailer = findTrailer ? findTrailer : jsonVideos.results[0];

    dispatch(addMovieTrailers(trailer));
  };

  useEffect(() => {
    try {
      !trailers && getMovieVideos();
    } catch (error) {
      console.log(error);
    }
  }, []);
};

export default useMovieTrailer;
