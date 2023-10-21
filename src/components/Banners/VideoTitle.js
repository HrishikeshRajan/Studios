import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const VideoTitle = (props) => {
  const navigate = useNavigate();
  const playTrailer = () => {
    navigate('/trailer/' + props.id + '/' + props.title);
  };
  return (
    <div className=" bg-gradient-to-r from-black  w-full    h-full absolute  z-10 flex flex-col justify-center  item-end md:flex-row md:items-center">
      <div className="flex flex-col  justify-center items-center md:items-start w-full">
        <h1 className="text-white text-3xl px-10 pb-1 md:text-5xl">
          {props.title}
        </h1>
        <p className=" text-white p-10 md:w-3/4 text-xs text-justify md:text-lg md:text-left">{props.overview}</p>
        <div className="my-2 flex justify-around md:justify-start md:px-10 bottom-0 absolute md:static  w-full">
          <button
            className="bg-white px-4 h-10 text-black rounded text-xs md:mr-5"
            onClick={playTrailer}
          >
            Play <FontAwesomeIcon icon={faPlay} beat />
          </button>
          <Link to={'/movie/' + props.id} className="flex flex-col h-10 ">
            <button className=" text-slate-50 mr-1  text-xs md:font-bold h-10  hover:bg-opacity-100">
              <FontAwesomeIcon
                icon={faCircleInfo}
                className="text-white hover:text-white"
              />
            </button>
            <small className="text-white text-xs font-light md:font-normal">info</small>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VideoTitle;
