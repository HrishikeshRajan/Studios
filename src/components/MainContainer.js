import React from 'react';
import { useSelector } from 'react-redux';
import VideoBackGround from './Banners/VideoBackGround';
import VideoTitle from './Banners/VideoTitle';

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  if (movies === null) return;
  const mainMovie = movies[0];

  return (
    <div  >
      <VideoTitle  title={mainMovie.original_title}  overview = { mainMovie.overview}  id ={mainMovie.id}/>
      <VideoBackGround  movieId ={mainMovie.id}/>
    </div>
  );
};

export default MainContainer;
