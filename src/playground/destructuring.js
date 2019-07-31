console.log('destructuring');

const person = {
  name: 'Ruth',
  age: 30,
  location: {
    city: 'London',
    temp: 36
  }
};

const { name, age } = person;

console.log(`${name} is ${age}.`);

// if (person.location.city && person.location.temp) {
//   console.log(`It\'s ${person.location.temp} C in ${person.location.city}.`);
// }

const { city, temp } = person.location;
if (city && temp) {
  console.log(`It\'s ${temp} C in ${city}.`);
}
