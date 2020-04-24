import { createStore } from 'redux';

const initialState = {
  selectedTab: 1,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
