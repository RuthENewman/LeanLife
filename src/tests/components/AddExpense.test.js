import React from 'react';
import { shallow } from 'enzyme';
import { AddExpense } from '../../components/AddExpense';
import expenses from '../fixtures/expenses';

let addExpense, history, wrapper;

beforeEach(() => {
  addExpense = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(<AddExpense
    addExpense={addExpense} history={history}
    />);
});

test('renders the Add Expense Page', () => {
  expect(wrapper).toMatchSnapshot();
});

test('handles submit', () => {
  wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith('/');
  expect(addExpense).toHaveBeenLastCalledWith(expenses[0]);
});
