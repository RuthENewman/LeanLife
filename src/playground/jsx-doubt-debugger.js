console.log('App.js is running');

const appObject = {
  title: 'Doubt Debugger',
  subtitle: 'Make decisions quickly',
  options: ['Yes or no?', 'Choose between options']
}

const handleSubmit = (event) => {
  event.preventDefault();

  const option = event.target.elements.option.value;

  if (option) {
    appObject.options.push(option);
    event.target.elements.option.value = '';
    renderOptions();
  }
};

const resetOptions = () => {
  appObject.options = [];
  renderOptions();
}

const decide = () => {
  const randomNumber = Math.floor(Math.random() * appObject.options.length);
  const choice = appObject.options[randomNumber];
  alert(choice);
}

const appRoot = document.getElementById('app');

const renderOptions = () => {
  const template = (
    <div>
      <h1>{appObject.title}</h1>
      {appObject.subtitle && <p>{appObject.subtitle}</p>}
    <p>{appObject.options.length > 0 ? 'What you can do:' : 'Add some options to choose from!'}</p>
      <button disabled={ appObject.options.length === 0 } onClick={decide}>Debug your doubt!</button>
      <button disabled={ appObject.options.length === 0 } onClick={resetOptions}>Remove All</button>
      <ol>
        {
          appObject.options.map((option) => <li key={option}>{option}</li>)
        }
      </ol>
      <form onSubmit={handleSubmit}>
        <input type="text" name="option"/>
        <button>Add an option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
}



renderOptions();
