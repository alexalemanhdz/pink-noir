import React from 'react';

import '../styles/LinksTab.css';

function LinksTab(props) {
  const displayMapping = (linksArray) => linksArray.map((link) => (
    <li key={`work-link-${link.id}`}>
      <a href={link.url}>{link.displayName}</a>
    </li>
  ));

  const { maxTabs, maxWidth } = props;
  const tabWidth = maxWidth / maxTabs;

  return (
    <div
      className="links-tab"
      style={{
        width: 480,
      }}
    >
      <h1
        className="tab-title"
        style={{
          left: props.index * (tabWidth - 5),
          maxWidth: tabWidth,
          minWidth: tabWidth,
          zIndex: 10 + props.index,
        }}
      >
        {props.tabName}
      </h1>
      <ul className="links-list">{displayMapping(props.links)}</ul>
    </div>
  );
}

export default LinksTab;
