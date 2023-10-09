import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import Trailer from './Trailer';

const VideoTitle = (props) => {
  const [trailer, setTrailer] = useState(false);
  const playTrailer = () => {
    setTrailer(!trailer);
  };
  return (
    <div>
      {trailer ? (
        <Trailer />
      ) : (
        <div className="pt-28 md:pt-4 absolute bg-gradient-to-r from-black  w-screen h-screen flex flex-col items-center md:items-start md:p-10">
          <h1 className=" text-xl  my-2 md:mt-32 md:text-6xl font-bold text-white">
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
    
                <FontAwesomeIcon
                  icon={faCircleInfo}
                  className="text-slate-400"
                />
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoTitle;
