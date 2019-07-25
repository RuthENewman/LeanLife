'use strict';

var appRoot = document.getElementById('app');

var visibility = false;

var toggleDetails = function toggleDetails() {
  visibility = !visibility;
  renderVisibilityToggle();
};

var renderVisibilityToggle = function renderVisibilityToggle() {
  var templateToggle = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: toggleDetails },
      visibility ? 'Hide details' : 'Show details'
    ),
    visibility && React.createElement(
      'div',
      null,
      React.createElement(
        'p',
        null,
        'Here are the details'
      )
    )
  );
  ReactDOM.render(templateToggle, appRoot);
};

renderVisibilityToggle();
