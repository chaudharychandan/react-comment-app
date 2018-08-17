import React from 'react';
import { mount } from 'enzyme';

import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('<CommentBox />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Root>
        <CommentBox />
      </Root>
    );
  });

  it('has a textarea and a button', () => {
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(1);
  });

  describe('the text area', () => {
    const input = 'new comment';

    beforeEach(() => {
      wrapper.find('textarea').simulate('change', { target: { value: input } });
      wrapper.update();
    });

    it('has a textarea that users can type in', () => {
      expect(wrapper.find('textarea').prop('value')).toEqual(input);
    });

    it('empties the textarea when form is submitted', () => {
      wrapper.find('form').simulate('submit');
      wrapper.update();

      expect(wrapper.find('textarea').prop('value')).toEqual('');
    });
  });

  afterEach(() => {
    wrapper.unmount();
  })
});