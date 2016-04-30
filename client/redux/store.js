import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import logger from 'redux-logger';

// var finalCreateStore = compose(
//   applyMiddleware(logger())
// )(createStore);

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

var configureStore = function(initialState) {
  return createStoreDevTools(reducer, initialState);
};

module.exports = configureStore;
