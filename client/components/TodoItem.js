import React from 'react';

class TodoItem extends React.Component{
  constructor(props) {
    super(props)
  }

  handleCompleted() {

  }

  handleDelete() {

  }

  render() {
    return (
      <li>
        <div>
          {this.props.todo.text}
        </div>
        <button onClick={this.handleCompleted}>toggle completed</button>
        <button onClick={this.handleDelete}>delete</button>
      </li>
    )
  }

}

module.exports = TodoItem
