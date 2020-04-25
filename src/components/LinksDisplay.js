import React from 'react';
import { connect } from 'react-redux';
import '../styles/LinksDisplay.css';

function LinksDisplay(props) {
  const linksList = props.linksList.map((link) => (
    <li key={link.id} className="link">
      <a href={link.url}>{link.displayName}</a>
    </li>
  ));

  return (
    <ul className="links-list">
      {linksList}
    </ul>
  );
}

export default connect()(LinksDisplay);
