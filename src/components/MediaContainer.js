import React from 'react';
import { connect } from 'react-redux';
import '../styles/MediaContainer.css';
import woosh from '../assets/woosh.jpg';
import jennie from '../assets/jennie.gif';

function MediaContainer(props) {
  let media = null;
  const { currentTab } = props;

  switch (currentTab) {
    case 0:
      media = <div className="woosh" style={{ backgroundImage: `url(${woosh})` }} />;
      break;
    case 1:
      media = <img className="jennie" src={jennie} alt="Jennie" />;
      break;
    default:
      media = null;
  }

  return (
    <div className="media-container">
      {media}
    </div>
  );
}

export default connect()(MediaContainer);
