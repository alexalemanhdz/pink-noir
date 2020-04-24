import React from 'react';

import { connect } from 'react-redux';

import links from './links';

import './App.css';
import LinksTab from './components/LinksTab';

function App() {
  const tabs = links.map((link, index) => (
    <LinksTab
      index={index}
      key={`${link.tabName}-tab`}
      tabName={link.tabName}
      links={link.tabContent}
    />
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="tab-container" style={{ width: '100%' }}>
          {tabs}
        </div>
        <div className="media-container" />
      </header>
    </div>
  );
}

export default connect()(App);
