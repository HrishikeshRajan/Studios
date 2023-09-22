import React  from 'react';

import {  useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';


const VideoBackGround = (props) => {
  const trailer = useSelector((store) => store.movies.trailers);
  useMovieTrailer(props)



  return (
    <div className='w-screen h-screen'>
      <iframe
        src={'https://www.youtube.com/embed/' + trailer?.key + '?autoplay=1&mute=1&enablejsapi=1&controls=0&&showinfo=0&loop=1'}
        title="Elemental | Official Trailer"
        className='w-screen h-screen aspect-video'
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
