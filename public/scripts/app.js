'use strict';

console.log('App.js is running');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Doubt Debugger'
  ),
  React.createElement(
    'p',
    null,
    'Make decisions quickly'
  ),
  React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      'Yes or no?'
    ),
    React.createElement(
      'li',
      null,
      'Choose between options'
    )
  )
);

var user = {
  firstName: 'Ruth',
  surname: 'Newman',
  age: 30,
  location: 'London'
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.firstName.toUpperCase(),
    ' ',
    user.surname
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
