import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({title,movie}) => {
  return (
    <div className='w-48 mx-1 '>
        <img src={IMG_CDN+movie} alt={title}  />
    </div>
  )
}

export default MovieCard