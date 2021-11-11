import { AnyAction, Dispatch } from 'redux';
import { auth, db } from '../../firebase/firebase';
import { USER_STATE_CHANGE } from '../const/index';

export const fetchUser = () => {
  return (dispatch: Dispatch<AnyAction>) => {
    db.collection('users')
      .doc(auth?.currentUser?.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, payload: snapshot.data() });
        } else {
          console.log('does not exist');
        }
      });
  };
};
