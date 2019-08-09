import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses';

test('returns 0 if no expenses', () => {
  const result = selectExpensesTotal([]);
  expect(result).toBe(0);
});

test('adds up a single expense', () => {
  const result = selectExpensesTotal([expenses[0]]);
  expect(result).toBe(1455);
});

test('adds up multiple expenses', () => {
  const result = selectExpensesTotal(expenses);
  expect(result).toBe(2703);
});
