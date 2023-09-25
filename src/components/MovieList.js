import React from 'react'
import MovieCard from './MovieCard'
const MovieList = ({title, movies}) => {

    if(movies === null) return
  return (
    <div className='p-6 translate-x-0' >
       <h1 className=" text-xm md:text-lg py-4 m-1 text-white">{title}</h1>
        <div className='flex overflow-x-scroll'>
     
            <div className='flex '>

         {
       movies.map((movie) =>   < MovieCard key={movie.id} title= {movie.title} movie={movie.poster_path} />)
         }
            </div>
        </div>
    </div>
  )
}

export default MovieList