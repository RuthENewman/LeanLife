// OBJECT DESTRUCTURING

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

// const book = {
//   title: 'Hide and Seek',
//   author: 'Ian Rankin',
//   publisher: {
//     name: 'Orion'
//   }
// }
//
// const { name: publisherName = 'Self published'} = book.publisher;
//
// console.log(publisherName);


// ARRAY DESTRUCTURING

const address = ['4 Crescent Court', 'London', 'United Kingdom', 'N21 8JP'];

const [street, city, country, postCode] = address;

// const [, , country = 'London'] = address;

console.log(`You are at ${street} in ${city}.`);

const item = ['Speculoos ice cream', '£3.50', '£4.50', '£5.50']

const [flavour, oneScoop, twoScoops, threeScoops] = item;

console.log(`Two scoops of ${flavour} costs ${twoScoops}.`);
