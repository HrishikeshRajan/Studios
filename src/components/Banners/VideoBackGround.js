import React from 'react';

import { useSelector } from 'react-redux';
import useMovieTrailer from '../../hooks/useMovieTrailer';
import { IMG_CDN, YOUTUBE_URL } from '../../utils/constants';

const VideoBackGround = (props) => {
  const trailer = useSelector((store) => store.movies.trailers);
  useMovieTrailer(props);

  if (trailer === null) return;
  return (
    <div className="w-full  h-screen top-20 lg:-top-96 xl:top-0 left-0 right-0 absolute ">
      <iframe
        className="w-full aspect-video hidden lg:flex"
        src={YOUTUBE_URL(trailer.key)}
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>

      <div>
        <img className='w-full h-auto object-cover lg:hidden' src={IMG_CDN + props.poster} alt="Movie Poster" />
      </div>

    </div>
  );
};

export default VideoBackGround;
