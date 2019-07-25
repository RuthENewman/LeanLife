'use strict';

console.log('App.js is running');

var appObject = {
  title: 'Doubt Debugger',
  subtitle: 'Make decisions quickly',
  options: ['Yes or no?', 'Choose between options']
};

var handleSubmit = function handleSubmit(event) {
  event.preventDefault();

  var option = event.target.elements.option.value;

  if (option) {
    appObject.options.push(option);
    event.target.elements.option.value = '';
    renderOptions();
  }
};

var resetOptions = function resetOptions() {
  appObject.options = [];
  renderOptions();
};

var appRoot = document.getElementById('app');

var renderOptions = function renderOptions() {
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
      appObject.options.length > 0 ? 'What you can do:' : 'Add some options to choose from!'
    ),
    React.createElement(
      'p',
      null,
      appObject.options.length
    ),
    React.createElement(
      'button',
      { onClick: resetOptions },
      'Remove All'
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
    ),
    React.createElement(
      'form',
      { onSubmit: handleSubmit },
      React.createElement('input', { type: 'text', name: 'option' }),
      React.createElement(
        'button',
        null,
        'Add an option'
      )
    )
  );

  ReactDOM.render(template, appRoot);
};

renderOptions();
