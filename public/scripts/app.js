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

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Ruth Newman'
  ),
  React.createElement(
    'p',
    null,
    'Age: 30'
  ),
  React.createElement(
    'p',
    null,
    'Location: London'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
