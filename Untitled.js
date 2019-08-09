import selectExpensesTotal from '../../selectors/expenses-total.js';

const getExpensesTotal = expenses => {
  let total = 0;
  expenses.map((expense) => {
    total += expense.amount;
  });
  return total;
};

const expenses = [{
  id: '1',
  description: 'Book',
  note: '',
  amount: 699,
  createdAt: 0
}, {
  id: '2',
  description: 'Rent',
  note: '',
  amount: 70000,
  createdAt: moment(0).subtract(10, 'days').valueOf()
}, {
  id: '3',
  description: 'Groceries',
  note: '',
  amount: 1500,
  createdAt: moment(0).add(3, 'days').valueOf()
}];

const total = getExpensesTotal(expenses);

console.log(total);
