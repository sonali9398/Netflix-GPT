import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion';
import { WALLPAPER_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <>
      <div className='fixed -z-10 '>
            <img className='h-screen object-cover'
                alt='wallpaper'
                src={WALLPAPER_IMG}
            />
        </div>
        <div className='pt-[20%]'>
        
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
    </>
    
  )
}

export default GptSearch