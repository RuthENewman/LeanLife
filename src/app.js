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

let firstName = 'Ruth';
let surname = 'Newman';
let age = 30;
let myLocation = 'London';

let templateTwo = (
  <div>
    <h1>{firstName.toUpperCase()} {surname}</h1>
    <p>Age: {age}</p>
    <p>Location: {myLocation}</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
