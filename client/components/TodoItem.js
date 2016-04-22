import React from 'react';

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

  render() {
    return (
      <li>
        <p
        style={{textDecoration: this.props.todo.completed?'line-through':''}}
        onClick={this.handleComplete}
        >
          {this.props.todo.text}{' '}
          <button onClick={this.handleDelete}>delete</button>
        </p>
      </li>
    )
  }

}

module.exports = TodoItem
