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


const me = new Student('Ruth Newman', 30, 'German and Hispanic Studies');

console.log(me.hasDegree());
console.log(me.getDescription());

const other = new Student();
console.log(other.hasDegree());
console.log(other.getDescription());
