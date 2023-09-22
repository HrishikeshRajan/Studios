import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies : null,
        trailers:null,
        popular:null,
        topRated:null,
        upComming:null
    },
    reducers :{
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },

        addMovieTrailers:(state, action) => {
            state.trailers = action.payload
        },
        addPopularMovies:(state, action) => {
            state.popular = action.payload
        },
        addTopMovies:(state, action) => {
            state.topRated = action.payload
        },
        addUpCommingMovies:(state, action) => {
            state.upComming = action.payload
        }
    }
})


export const { addNowPlayingMovies, addMovieTrailers, addPopularMovies, addTopMovies , addUpCommingMovies} = movieSlice.actions
export default movieSlice.reducer;