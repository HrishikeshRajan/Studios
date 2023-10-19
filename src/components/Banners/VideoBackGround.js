import React from 'react';

import { useSelector } from 'react-redux';
import useMovieTrailer from '../../hooks/useMovieTrailer';

const VideoBackGround = (props) => {
  const trailer = useSelector((store) => store.movies.trailers);
  useMovieTrailer(props);

  if (trailer === null) return;
  return (
    <div className="w-full h-screen top-0 left-0 right-0 absolute ">
      <iframe
        className="w-full aspect-video"
        src={
          'https://www.youtube.com/embed/' +
          trailer?.key +
          '?rel=0?version=3&autoplay=1&controls=0&showinfo=0&loop=1​&mute=1&fullscreen=1'
        }
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
