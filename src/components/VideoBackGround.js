import React from 'react';

import { useSelector } from 'react-redux';
import useMovieTrailer from '../hooks/useMovieTrailer';

const VideoBackGround = (props) => {
  const trailer = useSelector((store) => store.movies.trailers);
  useMovieTrailer(props);

  if (trailer === null) return;
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video "
        src={
          'https://www.youtube.com/embed/' +
          trailer?.key +
          '?rel=0?version=3&autoplay=1&controls=0&&showinfo=0&loop=1​&&mute=1'
        }
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackGround;
