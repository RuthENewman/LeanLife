class DoubtDebuggerApp extends React.Component {
  constructor(props) {
    super(props)

    this.reset = this.reset.bind(this);

    this.state = {
      options: ['Blue', 'Red', 'Green']
    }

  }

  reset() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  render() {

    const title = 'Doubt Debugger';
    const subtitle = 'Make decisions quickly!';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}/>
        <Options
        options={this.state.options}
        reset={this.reset}
        />
        <AddOption />
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
  handleChoice() {
    alert('Handle choice')
  }

  render() {
    return (
      <div>
        <button onClick={this.handleChoice}
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

  handleSubmit(event) {
    event.preventDefault();

    const option = event.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }

  render() {
    return (
    <div>
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="option" />
        <button type="submit">Add an option</button>
      </form>
    </div>
    )
  }
}

ReactDOM.render(<DoubtDebuggerApp />, document.getElementById('app'));
