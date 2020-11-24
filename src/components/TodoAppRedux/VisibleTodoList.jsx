import { connect } from 'react-redux'
import { func, string, number, shape, arrayOf, bool } from 'prop-types'

function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'all':
      return todos
    case 'completed':
      return todos.filter((todo) => todo.completed)
    case 'active':
      return todos.filter((todo) => !todo.completed)
    default:
      throw Error('filter is not correct')
  }
}

const VisibleTodoList = (props) => {
  return (
    <div>
      <ul>
        {props.todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => props.onClick(todo.id)}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

VisibleTodoList.propTypes = {
  todos: arrayOf(
    shape({
      id: number.isRequired,
      text: string.isRequired,
      completed: bool.isRequired,
    })
  ),
  onClick: func.isRequired,
}

const mapStateToProps = (state) => ({
  todos: getVisibleTodos(state.todos, state.visibilityFilter),
})
const mapDispatchToProps = (dispatch) => ({
  onClick: (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id })
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(VisibleTodoList)
