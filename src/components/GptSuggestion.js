import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'

const GptSuggestion = () => {
 
  const {movieResults, movieNames} = useSelector((store) => store.gpt);
  if(!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white'>
      <div>
        {movieNames.map((movieNames, index) => 
          <MovieList 
          key={movieNames} 
          title={movieNames} 
          movie={movieResults[index]}/>
          )}
      </div>
    </div>
  )
}

export default GptSuggestion