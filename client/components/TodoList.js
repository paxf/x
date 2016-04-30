import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		return (
			<ul>
        {this.props.todos.map(function (todo) {
            return (
              <TodoItem key={todo.id} todo={todo} deleteTodo={this.props.actions.deleteTodo} completeTodo={this.props.actions.completeTodo} />
            )
          }.bind(this))
				}
      </ul>
		)
	}
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired
	}).isRequired).isRequired,
	actions: PropTypes.shape({
		deleteTodo: PropTypes.func.isRequired,
		completeTodo: PropTypes.func.isRequired
	}).isRequired
}

module.exports = TodoList
