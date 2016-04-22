var getId = function (state) {
  return state.todos.reduce(function (maxId, todo) {
    return Math.max(todo.id, maxId)
  }, -1) + 1;
}

var reducer = function (state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return Object.assign({}, state, {
        todos: [{
          id: getId(state),
          completed: false,
          text: action.text
        }, ...state.todos]
      });
    default:
      return state;
  }
}

module.exports = reducer
