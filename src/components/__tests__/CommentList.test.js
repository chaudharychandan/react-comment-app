import React from 'react';
import { mount } from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';

describe('<CommentList />', () => {
  let wrapper;
  let initialState;

  beforeEach(() => {
    initialState = {
      comments: ['comment 1', 'comment 2', 'comment 3']
    }
    wrapper = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  it('creates one LI element per comment', () => {
    expect(wrapper.find('li').length).toEqual(initialState.comments.length);
  });

  it('shows the text for each comment', () => {
    const text = wrapper.render().text();
    initialState.comments.forEach(comment => {
      expect(text).toContain(comment);
    });
  });
});
