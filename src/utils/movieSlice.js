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
        selectedMovieCast:null,
        movieSuggestions:null
    },
    reducers :{
        addNowPlayingMovies: (state,action) => {
            state.nowPlayingMovies = action.payload
        },

        addMovieTrailers:(state, action) => {
            state.trailers = action.payload
        },
        removeMovieTrailer:(state) => {
            state.trailers = null
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
        addMovieSuggestions:(state, action) => {
            state.movieSuggestions= action.payload
        },
  
    }
})


<<<<<<< HEAD
export const { addNowPlayingMovies, addMovieTrailers, addPopularMovies, addTopMovies , addUpCommingMovies, addSelectedMovie, removeSelectedMovie, addSelectedMovieCast, removeMovieTrailer,    addMovieSuggestions } = movieSlice.actions
=======
export const { addNowPlayingMovies, addMovieTrailers, addPopularMovies, addTopMovies , addUpCommingMovies, addSelectedMovie, removeSelectedMovie, addSelectedMovieCast, removeMovieTrailer } = movieSlice.actions
>>>>>>> 82909ab7d1cbceb67ce4303fa1147410b119f084
export default movieSlice.reducer;