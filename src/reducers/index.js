import { combineReducers } from 'redux';
import commentsReducer from 'reducers/comments';
import AuthReducer from 'reducers/auth';


export default combineReducers({
  comments: commentsReducer,
  auth: AuthReducer
});
