import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firbase';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';

const useAuthenticate = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = auth.currentUser;

        dispatch(addUser({ uid, email, displayName }));

        navigate(location.pathname);
      } else {
        dispatch(removeUser());

        navigate('/');
      }
    });

    return () => unSubscribe();
  }, []);
};

export default useAuthenticate;
