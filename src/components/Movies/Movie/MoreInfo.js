import React from 'react';
import { useSelector } from 'react-redux';
import { LANG } from '../../../utils/languageConstant';

const MoreInfo = () => {
  const movie = useSelector((store) => store.movies);
  const language = useSelector((store) => store.appConfig.language);
  if (
    movie === null ||
    movie.selectedMovie === null ||
    movie.selectedMovieCast === null
  )
    return;

  return (
    <div className="text-white px-10 absolute mt-20 w-full">
      <h3 className="font-bold text-center">{LANG[language.code].movieView.MORE_INFO}</h3>

      <div>
        <ul>
          <li>
            <h3 className="font-bold py-5">Audio Languages</h3>
            <ul className="text-white">
              {movie.selectedMovie.spoken_languages.map((lan, index) => (
                <li className="text-white" key={index}>
                  {lan.name}
                </li>
              ))}
            </ul>
          </li>

          <li>
            <h3 className="font-bold py-5">Producers</h3>
            <ul>
              {movie.selectedMovie.production_companies.map(
                (company, index) => (
                  <li key={index}>{company.name}</li>
                ),
              )}
            </ul>
          </li>

          <li>
            <h3 className="font-bold py-5">Cast</h3>
            <ul>
              {movie.selectedMovieCast.cast.map((member, index) => (
                <li key={index}>
                  {member.original_name + ' : ' + member.character}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoreInfo;
