import React, { useRef } from 'react';
import lang from '../utils/LanguageConstant'
import { useSelector } from 'react-redux';
import openai from '../utils/openai'

const GptSearchBar = () => {

  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const handleSearchClick =async () => {
    console.log(searchText.current.value);

    //make an api call to gpt and get movie result
    const gptQuery = "Act as a movie recommendation system and suggest some movies" + searchText.current.value + 
    ". only give me name 7 movies and comma sepearated like the example given ahead. Example result: Titanic, Race, Tiger, Don, Dunky, Golmal, Krishh"

    const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });
  console.log(gptResults.choices);
  }

  return (
    <div className='pt-[10%]'>
        <form className=' grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
            <input
                ref={searchText}
                type='text'
                placeholder={lang[languageKey].getSearchPlaceholder}
                className='p-4 m-4 col-span-7 rounded-md'
            />
            <button className='p-4 m-4 bg-purple-800 text-white rounded-md shadow-md col-span-2 text-xl'
                onClick={handleSearchClick}>
                {lang[languageKey].search}
            </button>
        </form>
    </div>
  )
}

export default GptSearchBar