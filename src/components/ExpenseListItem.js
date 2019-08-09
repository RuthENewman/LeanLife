import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';
import 'numeral/locales/en-gb';

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  numeral.locale('en-gb');
  return (<div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      <span>{numeral(amount / 100).format('$#,##0.00')} </span>
       -
      <span> {moment(createdAt).format("dddd Do MMMM YYYY")}</span>
    </p>
  </div>
);
}

export default ExpenseListItem;
