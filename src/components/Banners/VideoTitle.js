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
    <div className="pt-28 md:pt-10 bg-gradient-to-r from-black h-[700px] w-full  top-0 left-0 right-0 bottom-0 flex pl-4 flex-col items-center lg:items-start md:p-10 relative z-30">
      <h1 className=" text-lg  my-2 md:mt-32 md:text-6xl font-bold text-white">
        {props.title}
      </h1>
      <p className="py-6 text-xs w-screen md:text-lg md:w-2/4 text-white hidden xl:block ">
        {props.overview}
      </p>

      <div className="my-2 flex justify-start">
        <button
          className="bg-white text-black  mr-1 py-1 px-2 md:px-4 md:py-2  rounded  hover:bg-slate-500 text-xs"
          onClick={playTrailer}
        >
          Play <FontAwesomeIcon icon={faPlay} beat />
        </button>
        <Link to={'/movie/' + props.id}>
          <button className="bg-white bg-opacity-60 text-black mr-1 px-2 py-1  text-xs md:px-4  md:py-2 rounded  hover:bg-opacity-100">
          <FontAwesomeIcon icon={faCircleInfo} className="text-black hover:text-white" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default VideoTitle;
