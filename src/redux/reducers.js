import { combineReducers } from 'redux';
import {
  CHANGE_TAB,
} from './actions';

const initialState = {
  currentTab: 0,
};

function tabs(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return {
        ...state,
        currenttab: action.payload,
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  tabs,
});

export default reducer;
