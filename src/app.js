console.log('App.js is running');

let appObject = {
  title: 'Doubt Debugger',
  subtitle: 'Make decisions quickly'
}

let template = (
  <div>
    <h1>{appObject.title}</h1>
    <p>{appObject.subtitle}</p>
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

ReactDOM.render(template, appRoot);
