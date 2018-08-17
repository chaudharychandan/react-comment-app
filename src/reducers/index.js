import { combineReducers } from 'redux';
import commentsReducer from 'components/comments';


export default combineReducers({
  comments: commentsReducer
});
