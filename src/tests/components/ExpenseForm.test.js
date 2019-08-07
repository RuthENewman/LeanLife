import React from 'react';
import { shallow } from 'enzyme';
import ExpenseForm from '../../components/ExpenseForm';
import expenses from '../fixtures/expenses';

test('renders Expense Form', () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test('renders Expense form with expense data', () => {
  const wrapper = shallow(<ExpenseForm expense={expenses[2]}/>);
  expect(wrapper).toMatchSnapshot();
});
