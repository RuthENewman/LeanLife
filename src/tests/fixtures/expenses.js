import moment from 'moment';

export default [
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
];
