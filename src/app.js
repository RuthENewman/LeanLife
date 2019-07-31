import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const Dashboard = () => (
  <div>
    Dashboard component
  </div>
);

const AddExpense = () => (
  <div>
    Add an expense
  </div>
);

const EditExpense = () => (
  <div>
    Edit an expense
  </div>
);

const Help = () => (
  <div>
    Help
  </div>
);

const NotFound = () => (
  <div>
    404 page not found - try the <Link to="/">home page</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Lean Life</h1>
  </header>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true}/>
        <Route path="/create" component={AddExpense}/>
        <Route path="/edit" component={EditExpense}/>
        <Route path="/help" component={Help}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
