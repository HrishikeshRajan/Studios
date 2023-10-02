import { signOut } from 'firebase/auth';
import { auth } from '../utils/firbase';

const useSignOut = () => {

    return () => {
        signOut(auth)
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    }

};

export default useSignOut;
