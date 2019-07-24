const add = (a, b) => {
  // console.log(arguments);
  return a + b;
};

console.log(add(55,1,12));

const user = {
  name: 'Ruth',
  cities: ['Manchester', 'London', 'Bogota', 'Berlin', 'Dhaka', 'Kathmandu'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city;
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [8, 6, 2, 4],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}

console.log(multiplier.multiply());
