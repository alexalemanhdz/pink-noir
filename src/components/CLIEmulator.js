import React from 'react';
import '../styles/CLIEmulator.css';

function CLIEmulator() {
  return (
    <form id="form" method="get" autoComplete="off">
      <input id="search" type="text" name="q" placeholder="-u | -h | -4 | -3 | -g" autoFocus="autofocus" />
    </form>
  );
}

export default CLIEmulator;
