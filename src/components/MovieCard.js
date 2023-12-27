import React from 'react'
import { IMG_CDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return null;
  return (
    <div className='w-36 md:w-48 pr-3'>
        <img 
            alt='img'
            src={IMG_CDN + posterPath}
        />
    </div>
  )
}

export default MovieCard