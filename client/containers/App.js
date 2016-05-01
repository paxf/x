import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'
import shallowCompare from 'react/lib/shallowCompare'

class App extends React.Component{
  constructor(props) {
    super(props)
	}

  render() {
		const {todos, actions} = this.props
    return (
      <div>
        <TodoInput addTodo={actions.addTodo}/>
        <TodoList todos={todos} actions={actions}/>
      </div>
    )
  }
}

var mapStateToPropsApp = function (state) {
  return state
}

var mapDispatchToProps = function (dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

module.exports = connect(mapStateToPropsApp, mapDispatchToProps)(App);
