import React from "react";

const TodoList = ({ todos, handleDelete, handleToggleComplete }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <li key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
          <span onClick={() => handleToggleComplete(index)}>{todo.text}</span>
          <button onClick={() => handleDelete(index)} className="delete-btn">Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
