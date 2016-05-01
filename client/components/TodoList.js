import React, { PropTypes } from 'react'
import TodoItem from './TodoItem'

class TodoList extends React.Component{
	constructor(props) {
		super(props)
	}
	render() {
		const {todos, actions} = this.props
		return (
			<ul>
				{todos.map(todo => (
              <TodoItem key={todo.id} todo={todo} deleteTodo={actions.deleteTodo} completeTodo={actions.completeTodo} />
				))}
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
