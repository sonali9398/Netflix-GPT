import {configureStore} from '@reduxjs/toolkit';
import userReducer from './userSlice';
import movieReducer from './movieSlice';
import gptReducer from './gptSlice'

const appstore = configureStore(
    {
        reducer:{
            user: userReducer,
            movie: movieReducer,
            gpt : gptReducer,
        },
    },
);

export default appstore;