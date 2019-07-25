const appRoot = document.getElementById('app');

let visibility = false;

const toggleDetails = () => {
  visibility = !visibility;
  renderVisibilityToggle();
};

const renderVisibilityToggle = () => {
  const templateToggle = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleDetails}>
      {visibility ? 'Hide details' : 'Show details'}
      </button>
      {visibility && (<div>
          <p>Here are the details</p>
        </div>
      )}
   </div>
  )
  ReactDOM.render(templateToggle, appRoot);
}

renderVisibilityToggle();
