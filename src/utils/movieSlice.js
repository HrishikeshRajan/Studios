import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:'movies',
    initialState:{
        nowPlayingMovies : null,
        trailers:null,
        popular:null,
        topRated:null,
        upComming:null,
        selectedMovie:null,
        selectedMovieCast:null
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
        },
        addSelectedMovie:(state, action) => {
            state.selectedMovie = action.payload
        },
        removeSelectedMovie:(state) => {
            state.selectedMovie = null
        },
        addSelectedMovieCast:(state, action) => {
            state.selectedMovieCast= action.payload
        },
  
    }
})


export const { addNowPlayingMovies, addMovieTrailers, addPopularMovies, addTopMovies , addUpCommingMovies, addSelectedMovie, removeSelectedMovie, addSelectedMovieCast } = movieSlice.actions
export default movieSlice.reducer;