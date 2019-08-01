import { createStore, combineReducers } from 'redux';

// ADD_EXPENSE
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

console.log(store.getState());

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
