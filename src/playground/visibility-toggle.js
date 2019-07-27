class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      visibility: false,
    }

    this.toggleDetails = this.toggleDetails.bind(this)

  }

  toggleDetails() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.toggleDetails}>
              {this.state.visibility ? 'Hide details' : 'Show details'}
              </button>
              {this.state.visibility && (<div>
                  <p>Here are the details</p>
                </div>
              )}
      </div>
    )
  }

}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
