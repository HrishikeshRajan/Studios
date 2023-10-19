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
    <div className="pt-28 md:pt-10 bg-gradient-to-r from-black h-screen w-full  top-0 left-0 right-0 bottom-0 flex flex-col items-center md:items-start md:p-10 relative z-30">
      <h1 className=" text-lg  my-2 md:mt-32 md:text-6xl font-bold text-white">
        {props.title}
      </h1>
      <p className="py-6 text-xs w-screen md:text-lg md:w-2/4 text-white hidden xl:block ">
        {props.overview}
      </p>

      <div className="my-2">
        <button
          className="bg-white text-black px-4 py-1 md:py-2 mx-1  rounded  hover:bg-slate-500"
          onClick={playTrailer}
        >
          Play <FontAwesomeIcon icon={faPlay} beat />
        </button>
        <Link to={'/movie/' + props.id}>
          <button className="bg-gray-500 text-black px-4  py-1 md:py-2 mx-1 rounded bg-opacity-95 hover:bg-slate-50">
            <FontAwesomeIcon icon={faCircleInfo} className="text-slate-400" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
