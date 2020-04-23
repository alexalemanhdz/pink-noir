import React from 'react';

function LinksTab(props) {
  const displayMapping = (linksArray) => linksArray.map((link) => (
    <li key={`work-link-${link.id}`}>
      <a href={link.url}>{link.displayName}</a>
    </li>
  ));

  return (
    <div key={`${props.key}-tab`} className="links-tab">
      <ul>{displayMapping(props.links)}</ul>
    </div>
  );
}

export default LinksTab;
