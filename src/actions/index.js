import axios from 'axios';

import {
  SAVE_COMMENT,
  FETCH_COMMENTS
} from 'actions/types';

const {
  REACT_APP_API_URL
} = process.env;

export const saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment
});

export const fetchComments = () => async (dispatch) => {
  const url = `${REACT_APP_API_URL}/comments`;
  const { data } = await axios.get(url);

  dispatch({
    type: FETCH_COMMENTS,
    payload: data
  });
}
