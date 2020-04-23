import React from 'react';
import './App.css';

import workLinks from './work-links';
import funLinks from './fun-links';

import LinksTab from './components/LinksTab';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="tab-container">
          <LinksTab key="work" links={workLinks} />
          <LinksTab key="fun" links={funLinks} />
        </div>
        <div className="media-container" />
      </header>
    </div>
  );
}

export default App;
