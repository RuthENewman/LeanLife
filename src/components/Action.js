import React from 'react';

const Action = (props) => {
    return (
      <div>
        <button onClick={props.handleChoice}
        disabled={!props.hasOptions}
        >
        Debug your doubt!
        </button>
      </div>
    );
}

export default Action;
