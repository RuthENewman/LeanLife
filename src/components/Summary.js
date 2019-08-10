import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import 'numeral/locales/en-gb';
import selectExpenses from '../selectors/expenses';
import selectExpensesTotal from '../selectors/expenses-total';

export const Summary = ({ count, total }) => {
  numeral.locale('en-gb');
  const word = count === 1 ? 'expense' : 'expenses';
  const formattedTotal = numeral(total / 100).format('$#,##0.00');
  return (
    <div>
      <h3>Viewing {count} expenses totalling {formattedTotal}.</h3>
    </div>
  )
};

const mapStateToProps = (state) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    count: visibleExpenses.length,
    total: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(Summary);
