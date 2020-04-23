import React from 'react';
import './App.css';
import workLinks from './work-links';
import funLinks from './fun-links';

const displayMapping = (linksArray) => linksArray.map((link) => (
  <li key={`work-link-${link.id}`}>
    <a href={link.url}>{link.displayName}</a>
  </li>
));

function App() {
  const workDisplayLinks = displayMapping(workLinks);
  const funDisplayLinks = displayMapping(funLinks);

  return (
    <div className="App">
      <header className="App-header">
        <div className="Tab-container">
          <div className="Work-tab">
            <ul>{workDisplayLinks}</ul>
          </div>
          <div className="Fun-tab">
            <ul>{funDisplayLinks}</ul>
          </div>
        </div>
        <div className="Media-container" />
      </header>
    </div>
  );
}

export default App;
