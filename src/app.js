console.log('App.js is running');

const appObject = {
  title: 'Doubt Debugger',
  subtitle: 'Make decisions quickly',
  options: ['Yes or no?', 'Choose between options']
}

const template = (
  <div>
    <h1>{appObject.title}</h1>
    {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>{appObject.options.length > 0 ? 'What you can do:' : 'App functionality currently not available'}</p>
    <ul>
      <li>Yes or no?</li>
      <li>Choose between options</li>
    </ul>
  </div>
);

let count = 0;
const addOne = () => {
  console.log('Add One');
};

const minusOne = () => {
  console.log('Minus One');
};

const reset = () => {
  console.log('Reset');
}

const templateTwo = (
 <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+1</button>
  <button onClick={minusOne}>-1</button>
  <button onClick={reset}>Reset</button>
 </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
