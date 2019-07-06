import React from 'react';
import { shallow } from 'enzyme';
// import 'jest-dom/extend-expect';
import Example from './Example';

const wrapper = props => shallow(<Example {...props} />);

const props = {
  message: 'test message'
};

test('should render Example', () => {
  // const { asFragment } = component;
  expect(wrapper(props)).toBeTruthy();
});

test('should render Example with test message', () => {
  // const { asFragment } = component;
  expect(wrapper(props).text()).toEqual('test message');
});
