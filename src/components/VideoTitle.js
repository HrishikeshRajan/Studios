import React from 'react'

const VideoTitle = (props) => {
  return (
 <div className='pt-32 px-24 absolute bg-gradient-to-r from-black w-screen h-screen'>
      <h1 className="text-6xl font-bold text-white">{props.title}</h1>
    <p className="py-6 text-lg w-1/3 text-white">{props.overview}</p>

    <div className="">
      <button className="bg-white text-black px-4 py-2 m-1 rounded  hover:bg-slate-500">
        Play ▶️
      </button>
      <button className="bg-gray-500 text-black px-4 py-2 rounded bg-opacity-50 hover:bg-slate-500">
        More Info
      </button>
    </div>
 </div>
  
  )
}

export default VideoTitle