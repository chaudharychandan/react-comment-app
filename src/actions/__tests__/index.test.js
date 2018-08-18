import { saveComment } from 'actions';
import { SAVE_COMMENT } from 'actions/types';

describe('saveComment Action', () => {
  it('has the correct type', () => {
    const action = saveComment();

    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it('has the correct payload', () => {
    const input = 'new comment';
    const action = saveComment(input);

    expect(action.payload).toEqual(input);
  });
});
