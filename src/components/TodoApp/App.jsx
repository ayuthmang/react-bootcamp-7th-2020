import React, { useState } from 'react'
import VisibleTodoList from './VisibleTodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'

let id = 1

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

function App() {
  const [todos, setTodos] = useState([
    { id: id++, text: 'Learn React', completed: true },
    { id: id++, text: 'Learn Vue', completed: false },
  ])
  const [visibilityFilter, setVisibilityFilter] = useState('all') // completed, active

  const onSubmit = (text) => {
    setTodos([
      ...todos,
      {
        id: id++,
        text: text,
        completed: false,
      },
    ])
  }
  const onFilterClick = (filter) => {
    setVisibilityFilter(filter)
  }
  const onTodoClick = (id) => {
    setTodos(
      todos.map((targetTodo) => {
        if (id !== targetTodo.id) {
          return targetTodo
        }

        return {
          ...targetTodo,
          completed: !targetTodo.completed,
        }
      })
    )
  }

  return (
    <div>
      <VisibleTodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onClick={onTodoClick}
      />
      <AddTodo onSubmit={onSubmit} />
      <Footer
        onFilterClick={onFilterClick}
        visibilityFilter={visibilityFilter}
      />
    </div>
  )
}

export default App
