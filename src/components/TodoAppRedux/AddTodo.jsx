import { useRef } from 'react'
import { connect } from 'react-redux'
import { func } from 'prop-types'

const AddTodo = (props) => {
  const todoRef = useRef()

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          const input = todoRef.current.value
          if (input !== '') {
            props.onSubmit(input)
            todoRef.current.value = ''
          }
        }}
      >
        <input ref={todoRef} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

AddTodo.propTypes = {
  onSubmit: func.isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (text) => dispatch({ type: 'ADD_TODO', payload: text }),
})
export default connect(null, mapDispatchToProps)(AddTodo)
