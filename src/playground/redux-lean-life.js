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
// EDIT_EXPENSE
// SET_TEXT_FILTER
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
