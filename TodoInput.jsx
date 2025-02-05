import React from "react";

const TodoInput = ({ inputText, setInputText, handleAddTodo }) => {
  return (
    <div className="todo-input">
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        placeholder="Add a new task..."
        className="input-field"
      />
      <button onClick={handleAddTodo} className="add-btn">Add</button>
    </div>
  );
};

export default TodoInput;
