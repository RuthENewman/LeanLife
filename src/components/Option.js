import React from 'react';

const Option = (props) => (
        <div>
          {props.option}
          <button
          onClick={(event) => {
            props.deleteOption(props.option)
          }}
          >X</button>
        </div>
);

export default Option;
