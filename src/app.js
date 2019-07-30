import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={Dashboard}/>
      <Route path="/create" component={AddExpense}/>
      <Route path="/edit" component={EditExpense}/>
      <Route path="/help" component={Help}/>
    </div>
  </BrowserRouter>
);

ReactDOM.render(<p>This is my boiler plate for Lean Life</p>, document.getElementById('app'));
