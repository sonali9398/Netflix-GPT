import React from 'react'
import MovieList from './MovieList';
import {useSelector} from 'react-redux'

const SecondaryContainer = () => {
  const movie = useSelector((store) => store.movie);
  // console.log(movie)
  return movie.NowPlayingMovies && (
    <div className='bg-black'>
      <div className='mt-0 md:-mt-40 pl-4 md:px-12 relative z-20'>
      
        <MovieList title={"Now Playing"} movie={movie.NowPlayingMovies}/>
        <MovieList title={"Top Rated"} movie={movie.topRatedMovies}/>
        <MovieList title={"TV"} movie={movie.tvSerials}/>
        <MovieList title={"Upcoming Movies"} movie={movie.upcomingMovies}/>
        <MovieList title={"Popular Movies"} movie={movie.popularMovies}/>


      </div>
    </div>
    
  )
}

export default SecondaryContainer