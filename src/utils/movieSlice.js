import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        NowPlayingMovies: null,
        trailerVideo : null,
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.NowPlayingMovies = action.payload;
        },
        addTrailer:(state, action) =>{
            state.trailerVideo = action.payload;
        }
    }
});

export const {addNowPlayingMovies, addTrailer} = movieSlice.actions;
export default movieSlice.reducer;