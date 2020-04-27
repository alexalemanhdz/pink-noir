import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { changeTab } from '../redux/actions';
import '../styles/CLIEmulator.css';

function CLIEmulator(props) {
  const dispatch = useDispatch();

  return (
    <input
      className="cli-emulator"
      autoFocus
      name="query"
      placeholder="tab | link | url | 4ch | w3 | googl"
      style={props.style}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          const query = e.target.value;
          const regex = /^tab \d+$/;
          if (regex.test(query)) {
            const selectedTab = parseInt(query.substr(4)) - 1;
            console.log(props.tabsCount);
            if (selectedTab < props.tabsCount) {
              dispatch(changeTab(selectedTab));
            }
          }
        }
      }}
    />
  );
}

export default connect()(CLIEmulator);
