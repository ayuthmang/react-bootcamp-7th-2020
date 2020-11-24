let id = 0

const initialState = [
  {
    id: id++,
    text: 'Learn React',
    completed: true,
  },
  {
    id: id++,
    text: 'Learn Redux',
    completed: false,
  },
]
const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { id: id++, text: action.payload, completed: false }]

    case 'TOGGLE_TODO':
      return state.map((todo) => {
        if (todo.id !== action.payload) {
          return todo
        }

        return {
          ...todo,
          completed: !todo.completed,
        }
      })

    default:
      return state
  }
}

export default todosReducer
