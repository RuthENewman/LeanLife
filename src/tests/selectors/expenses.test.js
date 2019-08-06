import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [
 {
  id: '1',
  description: 'Groceries',
  note: '',
  amount: 1455,
  createdAt: moment(0).subtract(7, 'days').valueOf()
},
  {
 id: '2',
 description: 'Netflix subscription',
 note: '',
 amount: 599,
 createdAt: 0
},
{
 id: '3',
 description: 'New mouse',
 note: '',
 amount: 649,
 createdAt: moment(0).add(7, 'days').valueOf()
  }
]

test('should filter by test value', () => {
  const filters = {
    text: 'i',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[1], expenses[0]]);
});

test('filters by start date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([ expenses[2], expenses[1] ])
});

test('filters by end date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(4, 'days')
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[1], expenses[0]])
});

test('sorts by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[2], expenses[1], expenses[0]])
});

test('sorts by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const result = selectExpenses(expenses, filters);

  expect(result).toEqual([expenses[0], expenses[2], expenses[1]])
});
