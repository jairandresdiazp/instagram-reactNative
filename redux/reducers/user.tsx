import { UserStateType } from 'types-app';
import { auth } from '../../firebase/firebase';
import {
  CLEAR_DATA,
  USER_FOLLOWING_STATE_CHANGE,
  USER_POSTS_STATE_CHANGE,
  USER_STATE_CHANGE,
} from '../const';

console.log(`uid ${auth?.currentUser?.uid}`);
const initialState: UserStateType = {
  user: null,
  posts: [],
  following: [],
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        user: action.payload,
      };
    case USER_POSTS_STATE_CHANGE:
      return {
        ...state,
        posts: action.payload,
      };

    case USER_FOLLOWING_STATE_CHANGE:
      return {
        ...state,
        following: action.payload,
      };
    case CLEAR_DATA:
      return initialState;
    default:
      return state;
  }
};

export default userReducer;
