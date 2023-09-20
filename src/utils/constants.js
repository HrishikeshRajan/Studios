const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMDg5NGRjZTM3N2RiNDY2MWY5YTg2NDA3OGY0NDI5YiIsInN1YiI6IjY1MDgwOTU2OGE4OGIyMDEzY2ZhN2JmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.10wQ8wtxebNHIzJEww9pxjOyX4fZMf8bSdQc3w3wyRI'
  }
};

export const OPTIONS = options;
export const URL = url;


