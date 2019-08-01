import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// ADD_EXPENSE

const addExpense = (
  {
    description = '',
    note = '' ,
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description: description,
    note: note,
    amount: amount,
    createdAt: createdAt
  }
});

// REMOVE_EXPENSE

const removeExpense = ({ id } = {}) =>
({
  type: 'REMOVE_EXPENSE',
  id: id
});

// EDIT_EXPENSE

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id: id,
  updates: updates
});

// SET_TEXT_FILTER

const setTextFilter = () => ({

});

// SORT_BY_DATE
// SORT_BY_AMOUNT
// SET_START_DATE
// SET_END_DATE

// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
      case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};

// Filters Reducer

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
      default:
        return state;
    }
};

// Store creation

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const expenseOne = store.dispatch(addExpense({ description: 'Monthly rent', amount: 70000 }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

store.dispatch(removeExpense({ id: expenseOne.expense.id }));

store.dispatch(editExpense(expenseTwo.expense.id, { amount: 400 }));

const exampleState = {
  expenses: [{
    id: 'oifhuiesnifmposefm',
    description: 'Concert tickets',
    note: '2x tickets for July gig at Albert Hall',
    amount: 5000,
    createdAt: 0,
  }],

  filters: {
    text: 'tickets',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
