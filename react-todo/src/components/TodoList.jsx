import React, { useState, useEffect } from "react";
import AddTodoForm from "./AddTodoForm";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Build a Todo List", completed: true },
    { id: 3, title: "Master JavaScript", completed: false },
  ]});

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])
  
  const addTodo = (title) => {
    const newTodo = {
      id: todos.length + 1,
      title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
        todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo)
    )
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <h1>Add New Todo</h1>
      <AddTodoForm addTodo={addTodo} />
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.title}
              <button onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? 'Undo Complete' : 'Complete'}
              </button>
              <button onClick={() => deleteTodo(todo.id)}>
                Delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
