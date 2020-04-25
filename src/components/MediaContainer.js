import React from 'react';
import { connect } from 'react-redux';
import '../styles/MediaContainer.css';
import woosh from '../assets/woosh.jpg';

function MediaContainer(props) {
  let media = null;

  if (props.currentTab === 0) {
    media = <div className="woosh" style={{ backgroundImage: `url(${woosh})` }} />;
  }

  return (
    <div className="media-container">
      {media}
    </div>
  );
}

export default connect()(MediaContainer);
