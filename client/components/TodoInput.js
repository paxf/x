import React from 'react'

class TodoInput extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}

	handleSubmit(e) {

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
