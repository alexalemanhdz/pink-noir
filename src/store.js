import { createStore } from 'redux';

const initialState = {
  // Add your states here
};

function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
