import React from 'react';
import ReactDOM from 'react-dom';
import DoubtDebuggerApp from './components/DoubtDebuggerApp';

ReactDOM.render(<DoubtDebuggerApp />, document.getElementById('app'));

class OldSyntax {
  constructor() {
    this.name = 'Ruth';
  }

  getGreeting() {
    return `Hi. My name is ${this.name}.`
  }
}

const oldSyntax = new OldSyntax();

// console.log(oldSyntax.getGreeting());
// const getGreeting = oldSyntax.getGreeting();
// console.log(getGreeting());

class NewSyntax {
  name = 'Ellie';
  getGreeting = () => {
    return `Hi, my name is ${this.name}.`
  }
}

const newSyntax = new NewSyntax();
const newGetGreeting = newSyntax.getGreeting;
console.log(newGetGreeting());
