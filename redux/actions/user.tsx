import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { auth, db } from '../../firebase/firebase';
import { USER_STATE_CHANGE } from '../const/index';

export const fetchUser = () => {
  return (dispatch: any) => {
    db.collection('user')
      .doc(auth?.currentUser?.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          dispatch({ type: USER_STATE_CHANGE, payload: snapshot.data()?.user });
        } else {
          console.log('does not exist');
        }
      })
      .catch((error) => {
        console.log(`Error Firebase: ${error}`);
      });
  };
};

export const useActionsUser = () => {
  const dispatch = useDispatch();
  return bindActionCreators({ fetchUser }, dispatch);
};
