import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <App />
    </Root>
  );
  moxios.install();
});

afterEach(() => {
  moxios.uninstall();
  wrapper.unmount();
});

it('can fetch a list of comments and display them', () => {
  wrapper.find('.fetch-comments').simulate('click');

  moxios.wait(async () => {
    let request = moxios.requests.mostRecent();
    await request.responseWith({
      status: 200,
      response: [{ name: 'comment 1'}, { name: 'comment 2' }]
    });

    wrapper.update();

    expect(wrapper.find('li').length).toEqual(2);
  });
});
