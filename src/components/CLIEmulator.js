import React from 'react';
import '../styles/CLIEmulator.css';
import { checkPropTypes } from 'prop-types';

function CLIEmulator(props) {
  return (
    <input
      className="cli-emulator"
      autoFocus
      name="query"
      placeholder="url | 4ch | w3 | googl"
      style={props.style}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          const query = e.target.value;
          console.log(query);
        }
      }}
    />
  );
}

export default CLIEmulator;
