import React from 'react'
import { useSelector } from 'react-redux';
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';

const MainContainer = () => {

    const movies = useSelector((store) => store.movie?.NowPlayingMovies);
    if (!movies) return;

    const mainMovie = movies[0];
    // console.log(mainMovie);
    const {original_title, overview, id} = mainMovie;
  return (
    <div className='pt-[30%] md:pt-0 bg-black'>
      <VideoTitle className='' title={original_title} overview={overview}/>
      <VideoBackground movieId={id}/>

    </div>

  )
}

export default MainContainer;