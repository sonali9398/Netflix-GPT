import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptSuggestion from './GptSuggestion';
import { WALLPAPER_IMG } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
        <div className='absolute -z-10'>
            <img
                alt='wallpaper'
                src={WALLPAPER_IMG}
            />
        </div>
        <GptSearchBar/>
        <GptSuggestion/>
    </div>
  )
}

export default GptSearch