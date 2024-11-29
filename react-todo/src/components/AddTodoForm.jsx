import React, { useState } from 'react'

function AddTodoForm({addTodo}) {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.trim()){
            addTodo(title);
            setTitle('');
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={title}
            placeholder='Add a new task'
            onChange={(e) => setTitle(e.target.value)}
             />
             <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default AddTodoForm