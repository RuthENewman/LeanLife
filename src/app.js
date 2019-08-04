import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Council tax bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas and lekkie bill', amount: 9300, createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Monthly rent', amount: 70000 }));
// store.dispatch(setTextFilter('bill'));
// setTimeout(() => {
//   store.dispatch(setTextFilter('tax'));
// }, 3000)

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
