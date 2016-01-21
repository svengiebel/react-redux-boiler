// ******************
// IMPORTANT IMPORTS
// ******************
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router'
const createHistory = require('history/lib/createHashHistory');
import { syncHistory } from 'redux-simple-router'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

// ******************
// REDUCERS
// ******************
import reducers from './reducers';

// ******************
// COMPONENTS FOR ROUTES
// ******************
import App from './components/app';

// ******************
// STYLES
// ******************
import '../style/style.scss';

const history = createHistory();
const reduxRouterMiddleware = syncHistory(history);
const createStoreWithMiddleware = applyMiddleware(reduxRouterMiddleware, ReduxPromise)(createStore);

const store = createStoreWithMiddleware(reducers)

reduxRouterMiddleware.listenForReplays(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
  , document.querySelector('.react-container'));
