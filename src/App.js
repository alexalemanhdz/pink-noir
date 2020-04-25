import React from 'react';
import { connect } from 'react-redux';
import links from './links';
import './App.css';
import LinksTab from './components/LinksTab';
import LinksDisplay from './components/LinksDisplay';
import MediaContainer from './components/MediaContainer';
import back from './assets/back.png';

function App(props) {
  const maxTabs = 6;
  const maxWidth = 500;

  const tabs = links.map((link, index) => {
    if (index < maxTabs) {
      return (
        <LinksTab
          index={index}
          key={`${link.tabName}-tab`}
          tabName={link.tabName}
          maxTabs={maxTabs}
          maxWidth={maxWidth}
        />
      );
    }
    return null;
  });

  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${back})` }}>
        <div className="container">
          <div className="tab-container">
            {tabs}
          </div>
          <div
            className="tab-content"
            style={{
              height: 300,
              width: maxWidth,
            }}
          >
            <LinksDisplay linksList={links[props.currentTab].tabContent} />
          </div>
        </div>
        <MediaContainer currentTab={props.currentTab} />
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  const { currentTab } = state.tabs;
  return { currentTab };
};

export default connect(mapStateToProps)(App);
