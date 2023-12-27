import React, { useRef } from 'react';
import lang from '../utils/LanguageConstant'
import { useDispatch, useSelector } from 'react-redux';
import openai from '../utils/openai'
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const languageKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  //search movie in tmdb 
  const fetchMovie = async(movie) =>{
    const data = await fetch ('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);
    const json = await data.json();
    return json.results;
  }

  const handleSearchClick =async () => {
    console.log(searchText.current.value);

    //make an api call to gpt and get movie result
    const gptQuery = "Act as a movie recommendation system and suggest some movies" + searchText.current.value + 
    ". only give me name 7 movies and comma sepearated like the example given ahead. Example result: Titanic, Race, Tiger, Don, Dunky, Golmal, Krishh"

    const gptResults = await openai.chat.completions.create({
    messages: [{ role: 'user', content: gptQuery }],
    model: 'gpt-3.5-turbo',
  });

  if(gptResults.choices ? 
  (gptResults.choices?.[0]?.message?.content) : "error");

  const gptMovies = gptResults.choices?.[0]?.message?.content.split(" ,");

  //for each movie find tmdb api
  // result will return array of promises
  const promiseArray = gptMovies.map(movie => fetchMovie(movie));
  const tmdbResults = await Promise.all(promiseArray);
  console.log(tmdbResults)
  dispatch(addGptMovieResult({moviNames:gptMovies, movieResults: tmdbResults}))
  }

  return (
    <div className='md:pt-[10%] pt-[-35%]'>
        <form className='w-full md:[w-1/2] grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
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