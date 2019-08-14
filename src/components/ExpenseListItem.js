import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";
import "numeral/locales/en-gb";

const ExpenseListItem = ({ id, description, amount, createdAt }) => {
  numeral.locale("en-gb");
  return (
    <Link className="list-item" to={`/edit/${id}`}>
      <div>
        <h3>{description}</h3>
        <span> {moment(createdAt).format("dddd Do MMMM YYYY")}</span>
      </div>
      <h3>{numeral(amount / 100).format("$#,##0.00")}</h3>
    </Link>
  );
};

export default ExpenseListItem;
