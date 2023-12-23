import { useDispatch } from "react-redux"
import { API_OPTIONS } from "../utils/constants";
import {addTvSerials} from '../utils/movieSlice';
import { useEffect } from "react";

const useTvSerials = () =>{
    const dispatch = useDispatch();

    const getTvSerialData =async () =>{
        const data = await fetch('https://api.themoviedb.org/3/trending/tv/day?language=en-US', API_OPTIONS);
        const json = await data.json();
        dispatch(addTvSerials(json.results));
    }

    useEffect(() =>{
        getTvSerialData();
    }, [])
}

export default useTvSerials