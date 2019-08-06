import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('sets up remove expense action object', () => {
  const action = removeExpense({id: '4567erty' });

  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '4567erty'
  });
});

test('sets up edit expense action object', () => {
  const action = editExpense('7890uiop', {note: 'New note value'});

  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '7890uiop',
    updates: {
      note: 'New note value'
    }
  });
});

test('sets up add expense action object', () => {
  const expenseData = {
    description: 'Rent',
    amount: 70000,
    createdAt: 10000,
    note: 'August rent'
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  });
});

test('sets up add expense action object with default values', () => {
  const action = addExpense();

  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})
