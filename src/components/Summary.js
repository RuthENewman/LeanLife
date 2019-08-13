import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import numeral from "numeral";
import "numeral/locales/en-gb";
import selectExpenses from "../selectors/expenses";
import selectExpensesTotal from "../selectors/expenses-total";

export const Summary = ({ count, total }) => {
  numeral.locale("en-gb");
  const word = count === 1 ? "expense" : "expenses";
  const formattedTotal = numeral(total / 100).format("$#,##0.00");
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{count}</span> {word} totalling{" "}
          <span>{formattedTotal}</span>.
        </h1>
        <div className="page-header__actions">
          <Link className="button" to="/create">
            Add an expense
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters);

  return {
    count: visibleExpenses.length,
    total: selectExpensesTotal(visibleExpenses)
  };
};

export default connect(mapStateToProps)(Summary);
