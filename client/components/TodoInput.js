// import React, { PropTypes } from 'react'
//
// class TodoInput extends React.Component {
// 	constructor(props) {
// 		super(props)
// 	}
//
// 	render() {
// 		return (
// 			<div>
//         <form onSubmit={(e) => {
// 					e.preventDefault()
// 					if(this.refs.input.value.trim()){
// 						this.props.addTodo(this.refs.input.value)
// 						this.refs.input.value = ''
// 					}
// 				}}>
//           <input type="text" placeholder="Add new todo" ref="input"/>
//           <input type="submit" value="Add todo"/>
//         </form>
//       </div>
// 		)
// 	}
// }
//
// TodoInput.propTypes = {
// 	addTodo: PropTypes.func.isRequired
// }
//
// module.exports = TodoInput


import React, { PropTypes } from 'react'

const TodoInput = ({ addTodo }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (input.value.trim()) {
	        addTodo(input.value)
	        input.value = ''
				}
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

TodoInput.propTypes = {
	addTodo: PropTypes.func.isRequired
}

export default TodoInput
