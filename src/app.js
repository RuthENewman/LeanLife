class DoubtDebuggerApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Doubt Debugger</h1>
        <h2>Make decisions quickly</h2>
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
      </div>
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
