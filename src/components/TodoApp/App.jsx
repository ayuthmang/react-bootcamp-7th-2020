import React, { useState, useRef } from 'react'

let id = 1

function getVisibilityFilter(todos, filter) {
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

function App() {
  const [todos, setTodos] = useState([
    { id: id++, text: 'Learn React', completed: true },
    { id: id++, text: 'Learn Vue', completed: false },
  ])
  const [visibilityFilter, setVisibilityFilter] = useState('all') // completed, active
  const todoRef = useRef()
  const onSubmit = (e) => {
    e.preventDefault()
    const input = todoRef.current.value
    if (input !== '') {
      setTodos([...todos, { id: id++, text: input, completed: false }])
      todoRef.current.value = ''
    }
  }
  const onFilterClick = (filter) => {
    setVisibilityFilter(filter)
  }

  return (
    <div>
      <ul>
        {getVisibilityFilter(todos, visibilityFilter).map((todo) => (
          <li
            key={todo.id}
            onClick={() => {
              setTodos(
                todos.map((targetTodo) => {
                  if (todo.id !== targetTodo.id) {
                    return targetTodo
                  }

                  return {
                    ...targetTodo,
                    completed: !targetTodo.completed,
                  }
                })
              )
            }}
            style={{
              textDecoration: todo.completed ? 'line-through' : 'none',
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
      <div>
        <form onSubmit={onSubmit}>
          <input ref={todoRef} type="text" />
          <button type="submit">Add Todo</button>
        </form>
      </div>
      <div>
        <span>
          Show:{' '}
          {visibilityFilter === 'statsxxxxxx' ? 'Active' : <p>Active</p>}

          {visibilityFilter === 'all' ? (
            'All'
          ) : (
            <a href="#/" onClick={() => onFilterClick('all')}>
              All
            </a>
          )}{' '}
          |{' '}
          {visibilityFilter === 'completed' ? (
            'Completed'
          ) : (
            <a href="#/" onClick={() => onFilterClick('completed')}>
              Completed
            </a>
          )}{' '}
          |{' '}
          {visibilityFilter === 'active' ? (
            'Active'
          ) : (
            <a href="#/" onClick={() => onFilterClick('active')}>
              Active
            </a>
          )}
        </span>
      </div>
    </div>
  )
}

export default App
