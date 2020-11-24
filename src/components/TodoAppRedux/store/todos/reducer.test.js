import todosReducer from './reducer'
import { addTodo, toggleTodo } from './action'

xtest('should set initial state to []', () => {
  expect(todosReducer(undefined, {})).toEqual([])
})

test('should add todo', () => {
  const initialState = []

  const nextState = todosReducer(initialState, addTodo('Learn Redux'))

  expect(initialState).not.toBe(nextState)
  expect(nextState).toEqual([
    { id: expect.any(Number), text: 'Learn Redux', completed: false },
  ])
})

test('should toggle todo by id', () => {
  const initialState = [{ id: 0, text: 'Learn React', completed: false }]

  const nextState = todosReducer(initialState, toggleTodo(0))

  expect(initialState).not.toBe(nextState)
  expect(nextState).toEqual([
    {
      id: 0,
      text: 'Learn React',
      completed: true,
    },
  ])
})

test('should add todo and toggle todo', () => {
  let initialState = []

  let nextState = todosReducer(initialState, addTodo('Learn React'))
  expect(nextState).toEqual([
    {
      id: expect.any(Number),
      text: 'Learn React',
      completed: false,
    },
  ])

  nextState = todosReducer(
    nextState,
    toggleTodo(nextState[nextState.length - 1].id)
  )
  expect(nextState).toEqual([
    {
      id: expect.any(Number),
      text: 'Learn React',
      completed: true,
    },
  ])
})
