'use strict';

console.log('App.js is running');

var appObject = {
  title: 'Doubt Debugger',
  subtitle: 'Make decisions quickly',
  options: ['Yes or no?', 'Choose between options']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  appObject.subtitle && React.createElement(
    'p',
    null,
    appObject.subtitle
  ),
  React.createElement(
    'p',
    null,
    appObject.options.length > 0 ? 'What you can do:' : 'App functionality currently not available'
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

var count = 0;

var addOne = function addOne() {
  count++;
  renderCounterApp();
};

var minusOne = function minusOne() {
  count--;
  renderCounterApp();
};

var reset = function reset() {
  count = 0;
  renderCounterApp();
};

var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
  var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Count: ',
      count
    ),
    React.createElement(
      'button',
      { onClick: addOne },
      '+1'
    ),
    React.createElement(
      'button',
      { onClick: minusOne },
      '-1'
    ),
    React.createElement(
      'button',
      { onClick: reset },
      'Reset'
    )
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
