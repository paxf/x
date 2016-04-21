import App from './containers/App'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

var initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Learn how to use react and redux'
    }
  ]
}

render(
  <App/>,
  document.getElementById('app')
);
