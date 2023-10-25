import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { decodeURI } from '../../../utils/uriEncoding';
import { useSelector } from 'react-redux';
import useMovieTrailer from '../../../hooks/useMovieTrailer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Trailer = () => {
  const params = useParams();
  params.title = decodeURI(params.title);

  const navigate = useNavigate();
  useMovieTrailer(params);
  const trailer = useSelector((store) => store.movies.trailers);

  if (trailer === null) return null;

  const moveBack = () => {
    navigate('/movie/' + params.id);
  };

  return (
    <div className="text-white  w-full h-full  flex justify-center items-center relative group">
      <button
        className="absolute right-52  bottom-2 hidden group-hover:flex text-white z-50  "
        data-tooltip-target=""
        onClick={moveBack}
      >
        <FontAwesomeIcon icon={faXmark} size="lg" />
      </button>

      <iframe
        className="w-screen aspect-video "
        src={
          'https://www.youtube.com/embed/' +
          trailer?.key +
          '?rel=0?version=3&autoplay=1&showinfo=0&loop=1​&&mute=1'
        }
        title={trailer?.title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Trailer;
