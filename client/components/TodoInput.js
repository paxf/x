import React from 'react'

class TodoInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleSubmit(e) {
		e.preventDefault()
		this.props.addTodo(this.state.text)
		this.setState({
			text: ''
		})
	}

	handleChange(e) {
		this.setState({
			text: e.target.value
		})
	}

	render() {
		return (
			<div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add new todo"
            value={this.state.text}
            onChange={this.handleChange}/>
          <input
            type="submit"
            value="Add todo"/>
        </form>

      </div>
		)
	}
}

module.exports = TodoInput
