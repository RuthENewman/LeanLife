import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, filtersTwo } from '../fixtures/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test('renders ExpenseListFilters component', () => {
  expect(wrapper).toMatchSnapshot();
});

test('renders ExpenseListFilters with filters two', () => {
  wrapper.setProps({
    filters: filtersTwo
  });
  expect(wrapper).toMatchSnapshot();
});

test('handles text change', () => {
  const value = 'rent';
  wrapper.find('input').simulate('change', {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
})

test('sorts by date', () => {
  const value = 'date';
  wrapper.setProps({
    filters: filtersTwo
  })
  wrapper.find('select').simulate('change',{
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test('sorts by amount', () => {
  const value = 'amount';
  wrapper.find('select').simulate('change',{
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test('handles date change', () => {
  const startDate = moment(0).add(3, 'months');
  const endDate = moment(0).add(6, 'months');
  wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(endDate);
});

test('handles date focus change', () => {
  const calendarFocused = 'startDate';
  wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
  expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});
