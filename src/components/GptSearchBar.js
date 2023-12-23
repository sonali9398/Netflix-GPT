import React from 'react';
import lang from '../utils/LanguageConstant'

const GptSearchBar = () => {
  return (
    <div className='pt-[10%]'>
        <form className=' grid grid-cols-12 '>
            <input
                type='text'
                placeholder={lang.hindi.getSearchPlaceholder}
                className='p-4 m-4 col-span-9 rounded-md'
            />
            <button className='p-4 m-3 bg-purple-800 text-white rounded-md shadow-md col-span-2 text-xl'>
                {lang.hindi.search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar