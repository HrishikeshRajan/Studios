import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo,  faXmark  } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { LANG } from '../../utils/languageConstant';
import useMovieTrailer from '../../hooks/useMovieTrailer';

const VideoTitle = (props) => {
  // const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  const playTrailer = () => {
    setPlay(!play);
    // navigate('/trailer/' + props.id + '/' + props.title);
  };
  useMovieTrailer(props);
  const trailer = useSelector((store) => store.movies.trailers);
  const language = useSelector((store) => store.appConfig.language);
  if (trailer === null) return null;
  if (language === undefined) return;
  return (
    <div className=" bg-gradient-to-r  from-black  w-full    h-full absolute  z-10 flex flex-col justify-center  item-end md:flex-row md:items-center">
      {play && (
        
        <div className=" absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 bg-black   z-50">
         <span className='absolute text-white right-1 top-1 cursor-pointer ' onClick={()=> setPlay(!play)}><FontAwesomeIcon icon={faXmark} size="lg" /></span>
          <iframe
            className=" lg:w-[800px] aspect-video "
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
      )}

      <div className="flex flex-col  justify-center items-center md:items-start w-full">
        <h1 className="text-white text-3xl px-10 pb-1 md:text-5xl">
          {props.title}
        </h1>
        <p className=" text-white p-10 md:w-3/4 text-xs text-justify md:text-lg md:text-left">
          {props.overview}
        </p>
        <div className="my-2 flex justify-around md:justify-start md:px-10 bottom-0 absolute md:static  w-full">
          <button
            className="bg-white px-4 h-10 text-black rounded text-xs md:mr-5"
            onClick={playTrailer}
          >
            <span className="mx-2 font-bold text-sm">
              {' '}
              {LANG[language.code].BANNER.PLAY}
            </span>
            <FontAwesomeIcon icon={faPlay} beat />
          </button>
          <Link to={'/movie/' + props.id} className="flex flex-col h-10 p-2">
            <button className=" text-slate-50 mr-1  text-xs md:font-thin h-10  hover:bg-opacity-100">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="text-white  hover:text-white"
              />
            </button>
            <small className="text-white text-xs font-light md:font-normal">
              {LANG[language.code].BANNER.MORE_INFO}
            </small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
