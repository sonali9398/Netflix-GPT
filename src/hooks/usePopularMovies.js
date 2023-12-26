import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import {addPopularMovies} from '../utils/movieSlice'

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const popularMovies = useSelector((store) => store.movie.popularMovies);;

    const getPopularMovies = async() =>{
    
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addPopularMovies(json.results));
      };
    
      useEffect(() =>{
        !popularMovies && getPopularMovies();
      }, []);
}


export default useNowPlayingMovies;