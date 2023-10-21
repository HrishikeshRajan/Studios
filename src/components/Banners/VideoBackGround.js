import React from 'react';

import { useSelector } from 'react-redux';
import useMovieTrailer from '../../hooks/useMovieTrailer';
import { IMG_CDN, YOUTUBE_URL } from '../../utils/constants';

const VideoBackGround = (props) => {
  const trailer = useSelector((store) => store.movies.trailers);
  useMovieTrailer(props);

  if (trailer === null) return;
  return (
    <div className="w-full  h-full absolute z-1 ">
      {/* <iframe
        className="w-full aspect-video hidden lg:flex"
        src={YOUTUBE_URL(trailer.key)}
        title={trailer.name}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen = {true}
      ></iframe> */}

      <div>
        <img className='w-full h-full object-cover absolute' src={IMG_CDN + props.poster} alt="Movie Poster" />
      </div>

    </div>
  );
};

export default VideoBackGround;
