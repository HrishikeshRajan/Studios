const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
export const urlPopular = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
export const urlTopRated = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
export const urlUpComming = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
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
