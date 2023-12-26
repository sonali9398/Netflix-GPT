import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import {addTvSerials} from '../utils/movieSlice';
import { useEffect } from "react";

const useTvSerials = () =>{
    const dispatch = useDispatch();

    const tvSerials = useSelector((store) => store.movie.tvSerials)

    const getTvSerialData =async () =>{
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addTvSerials(json.results));
    }

    useEffect(() =>{
     !tvSerials &&  getTvSerialData();
    }, [])
}

export default useTvSerials