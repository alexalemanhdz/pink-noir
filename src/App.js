import React from 'react';
import { connect } from 'react-redux';
import links from './links';
import './App.css';
import LinksTab from './components/LinksTab';
import LinksDisplay from './components/LinksDisplay';

function App(props) {
  const maxTabs = 6;

  const tabs = links.map((link, index) => {
    if (index < maxTabs) {
      return (
        <LinksTab
          index={index}
          key={`${link.tabName}-tab`}
          tabName={link.tabName}
          maxTabs={maxTabs}
        />
      );
    }
    return null;
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="tab-container">
          {tabs}
        </div>
        <div
          className="tab-content"
          style={{
            height: 300,
            width: 480,
          }}
        >
          <LinksDisplay linksList={links[props.currentTab].tabContent} />
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { currentTab } = state.tabs;
  return { currentTab };
};

export default connect(mapStateToProps)(App);
