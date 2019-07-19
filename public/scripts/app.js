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

var firstName = 'Ruth';
var surname = 'Newman';
var age = 30;
var myLocation = 'London';

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    firstName.toUpperCase(),
    ' ',
    surname
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    myLocation
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
