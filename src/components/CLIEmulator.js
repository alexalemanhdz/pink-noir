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
      placeholder="tab link url 4ch w3 googl"
      style={props.style}
      onKeyDown={(e) => {
        if (e.keyCode === 13) {
          const query = e.target.value;
          const tabRegex = /^tab \d+$/;
          const linkRegex = /^link \d+$/;

          if (tabRegex.test(query)) {
            const selectedTab = parseInt(query.substr(4)) - 1;
            if (selectedTab < props.tabsCount) {
              dispatch(changeTab(selectedTab));
            }
          }
          if (linkRegex.test(query)) {
            const selectedLink = parseInt(query.substr(4)) - 1;
            console.log(selectedLink);
          }
        }
      }}
    />
  );
}

export default connect()(CLIEmulator);
