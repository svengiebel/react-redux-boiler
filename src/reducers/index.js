import { combineReducers } from 'redux';
import { syncHistory, routeReducer } from 'redux-simple-router'

const rootReducer = combineReducers({
  routing: routeReducer,
  state: (state = {}) => state
});

export default rootReducer;
