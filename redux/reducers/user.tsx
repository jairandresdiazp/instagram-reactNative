import { UserStateType } from 'types-app';
import {
  CLEAR_DATA,
  USER_FOLLOWING_STATE_CHANGE,
  USER_POSTS_STATE_CHANGE,
  USER_STATE_CHANGE,
} from '../const';

const initialState: UserStateType = {
  currentUser: null,
  posts: [],
  following: [],
};

const user = (state = initialState, action: any) => {
  switch (action.type) {
    case USER_STATE_CHANGE:
      return {
        ...state,
        currentUser: action.payload,
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

export default user;
