import React from 'react';
import lang from '../utils/LanguageConstant'
import { useSelector } from 'react-redux';

const GptSearchBar = () => {

  const languageKey = useSelector((store) => store.config.lang)

  return (
    <div className='pt-[10%]'>
        <form className=' grid grid-cols-12 '>
            <input
                type='text'
                placeholder={lang[languageKey].getSearchPlaceholder}
                className='p-4 m-4 col-span-7 rounded-md'
            />
            <button className='p-4 m-4 bg-purple-800 text-white rounded-md shadow-md col-span-2 text-xl'>
                {lang[languageKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar