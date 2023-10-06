const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const urlUpComming = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';

export const getMovieImageUrl = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}/images`;
}
export const getMovieUrl = (id) => {
  return `https://api.themoviedb.org/3/movie/${id}`;
}


const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDg5NGRjZTM3N2RiNDY2MWY5YTg2NDA3OGY0NDI5YiIsInN1YiI6IjY1MDgwOTU2OGE4OGIyMDEzY2ZhN2JmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10wQ8wtxebNHIzJEww9pxjOyX4fZMf8bSdQc3w3wyRI'
  }
};

export const OPTIONS = options;
export const URL = url;
export const IMG_CDN = 'https://image.tmdb.org/t/p/w780/'

export const Background = "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_medium.jpg"

export   const NAVBAR_OPTIONS = {
  Home: 'HOME',
  Search: 'SEARCH',
  Account: 'ACCOUNT',
};