import React from 'react';
import { connect } from 'react-redux';

function LinksDisplay(props) {
  const linksList = props.linksList.map((link) => (
    <li key={link.id}>
      <a href={link.url}>{link.displayName}</a>
    </li>
  ));

  return (
    <ul>
      {linksList}
    </ul>
  );
}

export default connect()(LinksDisplay);
