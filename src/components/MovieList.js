import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movie}) => {
    // console.log(movie);
  return (
    <div className=' p-3'>
        <h1 className='font-bold text-2xl p-2 text-white'>{title}</h1>

        <div className='flex overflow-x-scroll text-white scrollbar-hide'>
            <div className='flex'>
                {movie?.map(mov => 
                  <MovieCard key={mov.id}
                  posterPath={mov.poster_path}/> )}
            </div>
        </div>
    </div>
  )
}

export default MovieList