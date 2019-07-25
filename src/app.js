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

class AddOptions extends React.Component {
  render() {
    return (
      <div>
        <p>Add Options component here</p>
      </div>
    )
  }
}

const jsx = (
  <div>
    <Header />
    <Action />
    <Options />
    <AddOptions />
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));
