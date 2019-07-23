function square(x) {
  return x * x;
}
//
// const squareArrow = (x) => {
//   return x * x;
// }

const squareArrow = (x) => x * x;

console.log(square(3));
console.log(squareArrow(7));

const getFirstName = (fullName) => {
  return fullName.split(" ")[0];
};

console.log(getFirstName('Ruth Newman'));

const getFirstNameShort = (fullName) => fullName.split(" ")[0];

console.log(getFirstNameShort('Ruth Newman'));
