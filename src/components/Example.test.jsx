import React from 'react';
import { shallow } from 'enzyme';
import Example from './Example';

const wrapper = props => shallow(<Example {...props} />);

const props = {
  message: 'test message'
};

test('should render Example', () => {
  expect(wrapper(props)).toBeTruthy();
});

test('should render Example with test message', () => {
  expect(wrapper(props).text()).toEqual('test message');
});
