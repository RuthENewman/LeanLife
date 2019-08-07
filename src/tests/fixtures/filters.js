import moment from 'moment';

const filters = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersTwo = {
  text: 'bill',
  sortBy: 'amount',
  startDate: moment(0),
  endDate: moment(0).add(7, 'days')
}

export { filters, filtersTwo };
