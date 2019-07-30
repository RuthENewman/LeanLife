import React from 'react';
import Option from './Option';

const Options = (props) => (
      <div>
        <div className="widget-header">
          <h3 className="widget-header__title">Your Options</h3>
          <button
          className="button button--link"
          onClick={props.reset}>Remove all options</button>
        </div>
        {props.options.length === 0 && <p className="widget__message">Start adding options to choose from in order to start debugging your doubt</p>}
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
