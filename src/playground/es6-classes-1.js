class Person {
  constructor(name = 'Anonymous', age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi there, ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} years old`
  }

}

class Student extends Person {
  constructor(name, age, degree) {
    super(name, age);
    this.degree = degree;
  }

  hasDegree() {
    return !!this.degree;
  }

  getDescription() {
    let description = super.getDescription();
      if (this.hasDegree()) {
        description += ` and has a degree in ${this.degree}.`;
      }
    return description;
  }
}

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }

  hasHomeLocation() {
    return !!this.homeLocation;
  }

  getGreeting() {
    let greeting = super.getGreeting();
      if (this.hasHomeLocation()) {
        greeting += ` Hope you are enjoying your time in ${this.homeLocation}.`;
      }
    return greeting;
  }
}

const me = new Traveler('Ruth Newman', 30, 'London');

console.log(me.hasHomeLocation());
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.hasHomeLocation());
console.log(other.getGreeting());
