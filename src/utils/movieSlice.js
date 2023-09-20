import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies : null,
        trailers:null
    },
    reducers :{
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },

        addMovieTrailers:(state, action) => {
            state.trailers = action.payload
        }
    }
})


export const { addNowPlayingMovies, addMovieTrailers } = movieSlice.actions
export default movieSlice.reducer;