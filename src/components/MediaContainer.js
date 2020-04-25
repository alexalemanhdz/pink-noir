import React from 'react';
import { connect } from 'react-redux';
import '../styles/MediaContainer.css';

function MediaContainer(props) {
  return (
    <div className="media-container">
      {props.currentTab}
    </div>
  );
}

export default connect()(MediaContainer);
