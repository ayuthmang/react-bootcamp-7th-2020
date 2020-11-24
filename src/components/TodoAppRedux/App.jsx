import VisibleTodoList from './VisibleTodoList'
import AddTodo from './AddTodo'
import Footer from './Footer'
import store from './store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Provider store={store}>
      <div>
        <VisibleTodoList />
        <AddTodo />
        <Footer />
      </div>
    </Provider>
  )
}

export default App
