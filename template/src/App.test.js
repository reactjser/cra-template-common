import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders learn react text', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.text()).toMatch(/learn react/i);
});
