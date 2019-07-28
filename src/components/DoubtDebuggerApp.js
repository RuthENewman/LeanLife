import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';

export default class DoubtDebuggerApp extends React.Component {
  state = {
    options: []
  }

  handleChoice = () => {
    const randomNumber = Math.floor(Math.random() * this.state.options.length);
    const choice = this.state.options[randomNumber];
    alert(choice);
  };

  reset = () => {
    this.setState(() => ({ options: [] }))
  };

  deleteOption = (option) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((prevOption) => prevOption !== option)
    }))
  };

  addOption = (option) => {
    if (!option) {
      return 'Please enter a valid value to add a new option'
    } else if (this.state.options.indexOf(option) > -1) {
      return 'Please provide a unique value to add another option'
    }

    this.setState((prevState) => ({
        options: prevState.options.concat([option])
      }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options: options }))
      }
    } catch (error) {

    }

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
  }

  render() {

    const subtitle = 'Make decisions quickly!';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action hasOptions={this.state.options.length > 0}
        handleChoice={this.handleChoice}
        />
        <Options
        options={this.state.options}
        reset={this.reset}
        deleteOption={this.deleteOption}
        />
        <AddOption
        addOption={this.addOption}
        />
      </div>
    )
  }
}
