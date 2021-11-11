import { combineReducers } from 'redux';
import { userReducer } from './user';

const Reducers = combineReducers({
  userState: userReducer,
});

export default Reducers;
