import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSearch, faHouse } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { toggleGptSearchView } from '../utils/gptSlice';
import { useDispatch, useSelector } from 'react-redux';


const BottomBar = () => {
  const dispatch = useDispatch();
  const gpt = useSelector((store) => store.gpt.showGptSearch);

  const handleHomePageTab = () => {
    if(gpt){
      dispatch(toggleGptSearchView());


    }
  }
  const handleGptSearchClick = () => {
    if(!gpt){
      dispatch(toggleGptSearchView());
    }

  };
  return (
    <div className="fixed block md:hidden bg-white p-3 left-0 right-0 bottom-0 z-50">
      <ul className="flex justify-evenly">
        <Link to={'/browse'} onClick={handleHomePageTab}>
          <li>
            <FontAwesomeIcon icon={faHouse} />
          </li>
        </Link>
        <Link to={'/browse'} onClick={handleGptSearchClick}>
          <li>
            <FontAwesomeIcon icon={faSearch} />
          </li>
        </Link>
        <Link to={'/profile'}>
          <li>
            <FontAwesomeIcon icon={faUser} />
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default BottomBar;
