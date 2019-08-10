const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve({
    //   name: 'Ruth',
    //   age: 30
    // });
    reject('Oops, something went wrong here!');
  }, 2000);
});

console.log('before');

promise.then((data) => {
  console.log('1', data);
}).catch((error) => {
  console.log('Error: ', error);
});

console.log('after');
