import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackGround from './VideoBackGround';
import VideoTitle from './VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  const mainMovie = movies[0];

  return (
    <div className='flex flex-col justify-center items-center h-[600px] relative' >
      <VideoTitle  title={mainMovie.original_title}  overview = { mainMovie.overview}  id ={mainMovie.id}/>
      <VideoBackGround  movieId ={mainMovie.id} poster={mainMovie.backdrop_path}  />
    </div>
  );
};

export default MainContainer;
