import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import TodoInput from '../components/TodoInput'
import TodoList from '../components/TodoList'

class App extends React.Component{
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <TodoInput addTodo={this.props.actions.addTodo}/>
        <TodoList todos={this.props.todos} actions={this.props.actions}/>
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
