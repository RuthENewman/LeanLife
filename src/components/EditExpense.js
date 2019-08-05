import React from 'react';
import { connect } from 'react-redux';

const EditExpense = (props) => {
  console.log(props);
  return (
    <div>
      Edit the expense with id of {props.match.params.id}.
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    expense: state.expenses.find((expense) =>  expense.id === props.match.params.id;
  };
};

export default connect(mapStateToProps)(EditExpense);
