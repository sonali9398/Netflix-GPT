import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        NowPlayingMovies: null,
        trailerVideo : null,
        popularMovies:null,
        topRatedMovies: null,
        upcomingMovies : null,
        tvSerials: null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addTrailer:(state, action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state, action) =>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies:(state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state, action) =>{
            state.upcomingMovies = action.payload;
        },
        addTvSerials:(state, action) =>{
            state.tvSerials = action.payload;
        },
    }
});

export const {addNowPlayingMovies, addTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addTvSerials} = movieSlice.actions;
export default movieSlice.reducer;