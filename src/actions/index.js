import { SAVE_COMMENT } from 'actions/types';

export default saveComment = comment => ({
  type: SAVE_COMMENT,
  payload: comment
});
