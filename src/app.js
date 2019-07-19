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

let templateTwo = (
  <div>
    <h1>Ruth Newman</h1>
    <p>Age: 30</p>
    <p>Location: London</p>
  </div>
);

let appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
