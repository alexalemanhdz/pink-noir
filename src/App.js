import React from 'react';

import { connect } from 'react-redux';

import links from './links';

import './App.css';
import LinksTab from './components/LinksTab';

function App() {
  const tabs = links.map((link) => <LinksTab key={`${link.tabName}-tab`} links={link.tabContent} />);

  return (
    <div className="App">
      <header className="App-header">
        <div className="tab-container">
          {tabs}
        </div>
        <div className="media-container" />
      </header>
    </div>
  );
}

export default connect()(App);
