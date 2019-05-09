import candyReducer from "./reducers/candyReducer";
import countReducer from "./reducers/countReducer";

export default function createStore(reducer) {
  // add your code here
  let state;
  const getState = function() {
    return state;
  };
  const dispatch = function(action) {
    state = reducer(state, action);
    render();
  };
  dispatch("INIT");
  return { getState, dispatch };
}

function render() {
  const container = document.getElementById("container");
}

// createStore(candyReducer);
// createStore(countReducer);
