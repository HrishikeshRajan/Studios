import React from 'react';

const VideoTitle = (props) => {
  return (
    <div className="pt-28 md:pt-4 absolute bg-gradient-to-r from-black  w-screen h-screen flex flex-col items-center md:items-start md:p-10">
      <h1 className=" text-xl  my-2 md:mt-32 md:text-6xl font-bold text-white">
        {props.title}
      </h1>
      <p className="py-6 text-xs w-screen md:text-lg md:w-1/3 text-white hidden xl:block ">
        {props.overview}
      </p>

      <div className="my-2">
        <button className="bg-white text-black px-4 py-1 md:py-2 mx-1  rounded  hover:bg-slate-500">
          Play ▶️
        </button>
        <button className="bg-gray-500 text-black px-4  py-1 md:py-2 mx-1 rounded bg-opacity-95 hover:bg-slate-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
