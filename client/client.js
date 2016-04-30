import 'babel-polyfill'
import App from './containers/App'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from './redux/store'

var initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Learn how to use react and redux'
    }
  ]
}


// const store = createStoreDevTools(initialState);

var store = configureStore(initialState)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
);
