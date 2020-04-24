import React from 'react';
import PropTypes from 'prop-types';

import '../styles/LinksTab.css';

function LinksTab(props) {
  const {
    index,
    maxTabs,
    maxWidth,
    tabName,
  } = props;
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
          left: index * (tabWidth - 5),
          maxWidth: tabWidth,
          minWidth: tabWidth,
          zIndex: 10 + index,
        }}
      >
        {tabName}
      </h1>
    </div>
  );
}

LinksTab.propTypes = {
  index: PropTypes.number.isRequired,
  maxTabs: PropTypes.number,
  maxWidth: PropTypes.number,
  tabName: PropTypes.string.isRequired,
};

LinksTab.defaultProps = {
  maxTabs: 6,
  maxWidth: 480,
};

export default LinksTab;
