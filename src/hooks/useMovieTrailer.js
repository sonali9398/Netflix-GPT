import { useDispatch } from "react-redux"
import { useEffect } from "react";
import { addTrailer } from "../utils/movieSlice";
import {API_OPTIONS} from '../utils/constants'

const useMovieTrailer = (movieId) =>{
    
        const dispatch = useDispatch();
  
        {/* get api call */}
        const getMovieApi = async () =>{
            const data = await fetch 
                ("https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US", API_OPTIONS);
            const json = await data.json();
            //console.log(json);

            const filterData = json.results.filter(video => video.type === 'Trailer');
            const trailer =filterData.length ? filterData[0] : json.results[0];
            console.log(trailer);
            dispatch(addTrailer(trailer))
        }

        useEffect(() =>{
            getMovieApi()
        }, []);
   
}

export default useMovieTrailer