import React from 'react';
import { shallow } from 'enzyme';
import { Summary } from '../../components/Summary';

test('renders Summary with one expense', () => {
  const wrapper = shallow(<Summary count={1} total={599}/>);
  expect(wrapper).toMatchSnapshot();
});

test('renders Summary with multiple expenses', () => {
  const wrapper = shallow(<Summary count={3} total={2703}/>);
  expect(wrapper).toMatchSnapshot();
});
