import React from 'react';
import '../styles/CLIEmulator.css';
import { checkPropTypes } from 'prop-types';

function CLIEmulator(props) {
  return (
    <input
      className="cli-emulator"
      autoFocus
      name="query"
      placeholder="-u | -h | -4 | -3 | -g"
      style={props.style}
    />
  );
}

export default CLIEmulator;
