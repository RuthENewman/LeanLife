import { createStore, combineReducers } from 'redux';

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
