import React, { useRef, useState } from 'react'

const TodoFrom = (props) => {

  //we will check if user is tring to update then we will display the value from props otherwise we will display null or ""

  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  //useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference.
  //A reference is an object having a single property “current”, which can be accessed and changed (mutated).

  const inputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    //here we have provided id as random number which will help us while updating or deleting the task
    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    })

    setInput("");
  }

  function handleChange(e) {
    setInput(e.target.value);
  }


  return (
    <form className='todo_form'>
      {
        props.edit ? (
          <>
            <input
              placeholder='Update your item'
              value={input}
              onChange={handleChange}
              ref={inputRef}
              className='input-edit'
            />

            <button onClick={handleSubmit} className="edit-button">
              Update
            </button>
          </>
        ) :
          (
            <>
              <input
                placeholder='Add your plan to list'
                value={input}
                onChange={handleChange}
                name='text'
                ref={inputRef}
                className='input-add'
              />

              <button onClick={handleSubmit} className="edit-button">
                Add
              </button>

            </>
          )
      }
    </form>
  )
}

export default TodoFrom