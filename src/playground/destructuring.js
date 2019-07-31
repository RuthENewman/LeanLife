 // const person = {
//   name: 'Ruth',
//   age: 30,
//   location: {
//     city: 'London',
//     temp: 36
//   }
// };
//
// const { name: firstName = 'Stranger', age } = person;
//
// console.log(`${firstName} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It\'s ${temperature} C in ${city}.`);
// }

const book = {
  title: 'Hide and Seek',
  author: 'Ian Rankin',
  publisher: {
    name: 'Orion'
  }
}

const { name: publisherName = 'Self published'} = book.publisher;

console.log(publisherName);
