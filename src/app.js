class DoubtDebuggerApp extends React.Component {

  render() {

    const title = 'Doubt Debugger';
    const subtitle = 'Make decisions quickly!';
    const options = ['Blue', 'Red', 'Green'];

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action />
        <Options options={options}/>
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
  render() {
    return (
      <div>
        <button>Debug your doubt!</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {

    return (
      <div>
        <p>Options component here</p>
        <ol>
          {this.props.options.length}
          <Option />
          <Option />
        </ol>
      </div>
    )
  }
}

class Option extends React.Component {
  render() {
    return (
        <li>Option component here</li>
    )
  }
}


class AddOption extends React.Component {
  render() {
    return (
      <div>
        <p>Add Option component here</p>
      </div>
    )
  }
}

ReactDOM.render(<DoubtDebuggerApp />, document.getElementById('app'));
