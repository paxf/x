import React, { PropTypes } from 'react';
import shallowCompare from 'react/lib/shallowCompare'

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
    this.handleComplete = this.handleComplete.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleComplete() {
    this.props.completeTodo(this.props.todo.id)
  }

  handleDelete() {
    this.props.deleteTodo(this.props.todo.id)
  }

	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState)
	}

  render() {
		const {todo} = this.props
    return (
      <li>
        <p style={{textDecoration: todo.completed?'line-through':''}} onClick={this.handleComplete} >
          {todo.text}{' '}
          <button onClick={this.handleDelete}>delete</button>
        </p>
      </li>
    )
  }
}

TodoItem.propTypes = {
	completeTodo: PropTypes.func.isRequired,
	deleteTodo: PropTypes.func.isRequired
}

module.exports = TodoItem
