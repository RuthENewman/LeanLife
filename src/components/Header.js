import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = ({ startLogout }) => (
  <header>
    <h1>Lean Life</h1>
    <NavLink to="/dashboard" activeClassName="is-active">My expenses</NavLink>
    <NavLink to="/create" activeClassName="is-active">Add an expense</NavLink>
    <button onClick={startLogout}>Log out</button>
  </header>
);

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);

const db = {
  expenses: {}
}
