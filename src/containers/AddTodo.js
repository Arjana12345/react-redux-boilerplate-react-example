import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

const AddTodo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form
        onSubmit={e => {
            
            // Prevent form submit
            e.preventDefault()

            // Check for empty / whitespace only inputs and cancel out
            if (!input.value.trim()) {
                return
            }

            // If input contains data, dispatch the action function
            dispatch(addTodo(input.value))

            // Reset input value back to empty
            input.value = ''
        }}
      >
        <input ref={node => (input = node)} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)