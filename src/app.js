console.log('App.js is running');

let template = (
  <div>
    <h1>Doubt Debugger</h1>
    <p>Make decisions quickly</p>
    <ul>
      <li>Yes or no?</li>
      <li>Choose between options</li>
    </ul>
  </div>
);

let user = {
  firstName: 'Ruth',
  surname: 'Newman',
  age: 30,
  location: 'London'
};

let templateTwo = (
  <div>
    <h1>{user.firstName.toUpperCase()} {user.surname}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
