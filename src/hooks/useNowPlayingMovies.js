import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch();

    const NowPlayingMovies = useSelector(store => store.movie.nowPlayingMovies)

    const getNowPlayingMovies = async() =>{
    
        const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const json = await data.json();
        //console.log(json.results);
        dispatch(addNowPlayingMovies(json.results));
      };
    
      useEffect(() =>{
        !NowPlayingMovies && getNowPlayingMovies();
      }, []);
}


export default useNowPlayingMovies;