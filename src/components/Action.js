import React from 'react';

const Action = (props) => (
      <div>
        <button className="large-button"
        onClick={props.handleChoice}
        disabled={!props.hasOptions}
        >
        Debug your doubt!
        </button>
      </div>
);


export default Action;
