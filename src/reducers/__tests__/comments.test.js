import commentsReducer from 'reducers/comments';
import { SAVE_COMMENT } from 'actions/types';

describe('Comments Reducer', () => {
  it('handles actions of type SAVE_COMMENT', () => {
    const input = 'new comment';
    const action = {
      type: SAVE_COMMENT,
      payload: input
    };
  
    const newState = commentsReducer([], action);
    expect(newState).toEqual([input]);
  });

  it('handles action with unknown type', () => {
    const newState = commentsReducer([], {});
    expect(newState).toEqual([]);
  });
});
