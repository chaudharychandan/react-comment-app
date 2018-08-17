import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';
import CommentBox from '../CommentBox';

it('shows a comment box', (done) => {
  const wrapper = shallow(<App />);

  expect(wrapper.find(CommentBox).length).toEqual(1);
  done();
});