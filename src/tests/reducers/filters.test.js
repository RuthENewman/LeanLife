import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('sets up default filter values', () => {
  const state = filtersReducer(undefined, { type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('sets sort by to amount', () => {
  const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});

  expect(state.sortBy).toBe('amount');
});

test('sets sort by to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }

  const action = {type: 'SORT_BY_DATE'};

  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

test('sets text filter', () => {
  const text = 'subscription';
  const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text: text});

  expect(state.text).toEqual(text);
});

test('sets start date', () => {
  const startDate = moment(0).add(3, 'days').valueOf();

  const state = filtersReducer(undefined, {type: 'SET_START_DATE', startDate: startDate});

  expect(state.startDate).toEqual(startDate);
});

test('sets end date', () => {
  const endDate = moment(0).add(14, 'days').valueOf();

  const state = filtersReducer(undefined, {type: 'SET_END_DATE', endDate: endDate});

  expect(state.endDate).toEqual(endDate);
});
