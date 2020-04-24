import React from 'react';

import '../styles/LinksTab.css';

function LinksTab(props) {
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
    </div>
  );
}

export default LinksTab;
