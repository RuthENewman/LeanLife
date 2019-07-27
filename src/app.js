class DoubtDebuggerApp extends React.Component {
  constructor(props) {
    super(props)

    this.reset = this.reset.bind(this);
    this.handleChoice = this.handleChoice.bind(this);
    this.addOption = this.addOption.bind(this);

    this.state = {
      options: ['Blue', 'Red', 'Green']
    }

  }

  handleChoice() {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randomNumber];
    alert(choice);
  }

  reset() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  addOption(option) {
    if (!option) {
      return 'Please enter a valid value to add a new option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Please provide a unique value to add another option'
    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      }
    })
  }

  render() {

    const title = 'Doubt Debugger';
    const subtitle = 'Make decisions quickly!';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
        handleChoice={this.handleChoice}
        />
        <Options
        options={this.state.options}
        reset={this.reset}
        />
        <AddOption
        addOption={this.addOption}
        />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }

}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleChoice}
        disabled={!this.props.hasOptions}
        >
        Debug your doubt!
        </button>
      </div>
    );
  }
}

class Options extends React.Component {

  render() {

    return (
      <div>
        <button onClick={this.props.reset}>Remove all options</button>
        <ol>
          {
            this.props.options.map((option) => <Option key={option} option={option}/> )
          }
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
        <li>{this.props.option}</li>
    )
  }
}


class AddOption extends React.Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      error: undefined,
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();
    const error = this.props.addOption(option);

    this.setState(() => {
      return { error };
    });
  }

  render() {
    return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add an option</button>
      </form>
    </div>
    )
  }
}

ReactDOM.render(<DoubtDebuggerApp />, document.getElementById('app'));
