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

export default VisibleTodoList