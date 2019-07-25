class Person {
  constructor(name = 'Anonymous') {
    this.name = name;
  }

  getGreeting() {
    // return 'Hi ' + this.name + "!";
    return `Hi there, ${this.name}!`;
  }

}

const me = new Person('Ruth Newman');

console.log(me.getGreeting());

const other = new Person();
console.log(other);
