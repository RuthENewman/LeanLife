'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DoubtDebuggerApp = function (_React$Component) {
  _inherits(DoubtDebuggerApp, _React$Component);

  function DoubtDebuggerApp(props) {
    _classCallCheck(this, DoubtDebuggerApp);

    var _this = _possibleConstructorReturn(this, (DoubtDebuggerApp.__proto__ || Object.getPrototypeOf(DoubtDebuggerApp)).call(this, props));

    _this.reset = _this.reset.bind(_this);
    _this.handleChoice = _this.handleChoice.bind(_this);
    _this.addOption = _this.addOption.bind(_this);

    _this.state = {
      options: ['Blue', 'Red', 'Green']
    };

    return _this;
  }

  _createClass(DoubtDebuggerApp, [{
    key: 'handleChoice',
    value: function handleChoice() {
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      var choice = this.state.options[randomNumber];
      alert(choice);
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.setState(function () {
        return {
          options: []
        };
      });
    }
  }, {
    key: 'addOption',
    value: function addOption(option) {
      if (!option) {
        return 'Please enter a valid value to add a new option';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'Please provide a unique value to add another option';
      }

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var title = 'Doubt Debugger';
      var subtitle = 'Make decisions quickly!';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, { hasOptions: this.state.options.length > 0,
          handleChoice: this.handleChoice
        }),
        React.createElement(Options, {
          options: this.state.options,
          reset: this.reset
        }),
        React.createElement(AddOption, {
          addOption: this.addOption
        })
      );
    }
  }]);

  return DoubtDebuggerApp;
}(React.Component);

var Header = function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
  }

  _createClass(Header, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          this.props.title
        ),
        React.createElement(
          'h2',
          null,
          this.props.subtitle
        )
      );
    }
  }]);

  return Header;
}(React.Component);

var Action = function (_React$Component3) {
  _inherits(Action, _React$Component3);

  function Action() {
    _classCallCheck(this, Action);

    return _possibleConstructorReturn(this, (Action.__proto__ || Object.getPrototypeOf(Action)).apply(this, arguments));
  }

  _createClass(Action, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.handleChoice,
            disabled: !this.props.hasOptions
          },
          'Debug your doubt!'
        )
      );
    }
  }]);

  return Action;
}(React.Component);

var Options = function (_React$Component4) {
  _inherits(Options, _React$Component4);

  function Options() {
    _classCallCheck(this, Options);

    return _possibleConstructorReturn(this, (Options.__proto__ || Object.getPrototypeOf(Options)).apply(this, arguments));
  }

  _createClass(Options, [{
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        React.createElement(
          'button',
          { onClick: this.props.reset },
          'Remove all options'
        ),
        React.createElement(
          'ol',
          null,
          this.props.options.map(function (option) {
            return React.createElement(Option, { key: option, option: option });
          })
        )
      );
    }
  }]);

  return Options;
}(React.Component);

var Option = function (_React$Component5) {
  _inherits(Option, _React$Component5);

  function Option() {
    _classCallCheck(this, Option);

    return _possibleConstructorReturn(this, (Option.__proto__ || Object.getPrototypeOf(Option)).apply(this, arguments));
  }

  _createClass(Option, [{
    key: 'render',
    value: function render() {
      return React.createElement(
        'li',
        null,
        this.props.option
      );
    }
  }]);

  return Option;
}(React.Component);

var AddOption = function (_React$Component6) {
  _inherits(AddOption, _React$Component6);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this6 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this6.handleSubmit = _this6.handleSubmit.bind(_this6);

    _this6.state = {
      error: undefined
    };
    return _this6;
  }

  _createClass(AddOption, [{
    key: 'handleSubmit',
    value: function handleSubmit(event) {
      event.preventDefault();

      var option = event.target.elements.option.value.trim();
      var error = this.props.addOption(option);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleSubmit },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'Add an option'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

var User = function User(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'p',
      null,
      'Name: ',
      props.name
    ),
    React.createElement(
      'p',
      null,
      'Age: ',
      props.age
    )
  );
};

ReactDOM.render(React.createElement(User, { name: 'Ruth', age: 30 }), document.getElementById('app'));
