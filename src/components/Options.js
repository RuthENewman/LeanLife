import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
        <button onClick={props.reset}>Remove all options</button>
        {props.options.length === 0 && <p>Start adding options to choose from in order to start debugging your doubt</p>}
          {
          props.options.map((option) => (
            <Option
          key={option}
          option={option}
          deleteOption={props.deleteOption}
           /> ))}
      </div>
);

export default Options;
