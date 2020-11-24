import { createStore, combineReducers } from 'redux'
import todosReducer from './todos/reducer'
import visibilityFilterReducer from './visibilityFilter/reducer'

const store = createStore(
  combineReducers({
    todos: todosReducer,
    visibilityFilter: visibilityFilterReducer,
  })
)

export default store
