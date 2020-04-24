import React from 'react';

import links from './links';

import './App.css';
import LinksTab from './components/LinksTab';

function App() {
  const tabs = links.map((link, index) => (
    <LinksTab
      index={index}
      key={`${link.tabName}-tab`}
      tabName={link.tabName}
    />
  ));

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
        />
      </header>
    </div>
  );
}

export default App;
