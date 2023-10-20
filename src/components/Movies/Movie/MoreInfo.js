import React from 'react';
import { useSelector } from 'react-redux';

const MoreInfo = () => {
  const movie = useSelector((store) => store.movies);
  if (movie === null || movie.selectedMovie === null ||  movie.selectedMovieCast === null) return;

  return (
    <div className="text-white p-10">
      <h3 className="py-5 font-bold text-center">More Info</h3>
      <div>
        <ul>
          <li>
            <h3 className='font-bold py-5'>Audio Languages</h3>
            <ul className="text-white">
              {movie.selectedMovie.spoken_languages.map((lan, index) => (
                <li className="text-white" key={index}>
                  {lan.name}
                </li>
              ))}
            </ul>
          </li>
  
          <li>
            <h3 className='font-bold py-5'>Producers</h3>
            <ul>
              {movie.selectedMovie.production_companies.map(
                (company, index) => (
                  <li key={index}>{company.name}</li>
                ),
              )}
            </ul>
          </li>
          
          <li>
            <h3 className='font-bold py-5'>Cast</h3>
            <ul>
              {movie.selectedMovieCast.cast.map(
                (member, index) => (
                  <li key={index}>{member.original_name + ' : ' + member.character}</li>
                ),
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoreInfo;
