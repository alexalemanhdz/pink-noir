import React from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { changeTab } from '../redux/actions';
import '../styles/LinksTab.css';

function LinksTab(props) {
  const dispatch = useDispatch();
  const {
    currentTab,
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
        width: maxWidth,
      }}
    >
      <h1
        className={`tab-title${index === currentTab ? ' selected-tab' : ' unselected-tab'}`}
        style={{
          borderLeftColor: (index === 0 ? 'transparent' : 'black'),
          left: index * (tabWidth - 10),
          width: tabWidth - 10,
          zIndex: index + (index === currentTab ? 3 : 1),
        }}
        onClick={() => dispatch(changeTab(index))}
      >
        {index + 1}
        {' '}
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

const mapStateToProps = (state) => {
  const { currentTab } = state.tabs;
  return { currentTab };
};

export default connect(mapStateToProps)(LinksTab);
