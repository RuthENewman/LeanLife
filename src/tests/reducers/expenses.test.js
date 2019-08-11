import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('sets default state', () => {
  const state = expensesReducer(undefined, { type: '@@INIT'});

  expect(state).toEqual([]);
})

test('removes expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[0].id
  }

  const state = expensesReducer(expenses, action);

  expect(state).toEqual([expenses[1], expenses[2]]);
});

test('does not remove expenses with non-matching ID', () => {

  const action = {
    type: 'REMOVE_EXPENSE',
    id: '7000'
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('adds an expense', () => {

  const expense = {
    id: '4',
    description: 'Exhibition ticket',
    note: '',
    createdAt: moment().add(3, 'days').valueOf(),
    amount: 7500
  }

  const action = {
    type: 'ADD_EXPENSE',
    expense: expense
  }

  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('edits an expense', () => {
  const amount = 799;
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[1].id,
    updates: {
      amount: amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state[1].amount).toEqual(amount);
});

test('does not edit an expense if ID not found', () => {
  const amount = 799;
  const action = {
    type: 'EDIT_EXPENSE',
    id: "7000",
    updates: {
      amount: amount
    }
  };

  const state = expensesReducer(expenses, action);
  expect(state).toEqual(state);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: [expenses[1]]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[1]]);
});
