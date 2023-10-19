
import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

import useEmblaCarousel from 'embla-carousel-react';
import MovieCard from '../../MovieCard';

const MovieList = ({ title, movies }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
  });
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);

    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  if (movies === null) return;

  return (
    <section id="test" className="">
      <div className='mb-24'>
      <h3 className='text-xl font-bold text-white ml-10 p-4 '>{title}</h3>
      <div className="flex justify-between relative   ">
      
        <div>
          <button
            id="moveLeft"
            onClick={scrollPrev}
            disabled={prevBtnDisabled}
            className={`p-3 h-full w-10 z-10  bg-black bg-opacity-30 hover:bg-opacity-60  text-white absolute top-1/2 left-0 transform -translate-y-1/2 rounded shadow-md `}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button
            onClick={scrollNext}
            disabled={nextBtnDisabled}
            className=" p-3 h-full  z-10   bg-black bg-opacity-30 hover:bg-opacity-60 text-white  absolute right-0 top-1/2 transform -translate-y-1/2 rounded shadow-md "
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        <div className="embla overflow-hidden" ref={emblaRef}>
          <ul className={`flex ml-0  embla__container`}>
            {movies.map((movie) => (
              <MovieCard
                title={movie.title}
                id={movie.id}
                moviePoster={movie.poster_path}
              />
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MovieList;
