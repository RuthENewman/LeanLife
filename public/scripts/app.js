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

var user = {
  firstName: 'Ruth',
  surname: 'Newman',
  age: 30,
  location: 'London'
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.firstName ? user.firstName.toUpperCase() : 'Anonymous',
    ' ',
    React.createElement(
      'span',
      null,
      user.surname && user.surname
    )
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
