import React from "react";

const TodoItem = ({todo, index, handleDelete, handleToggleComplete}) => {
    return(
        <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <span
            onClick={()=>handleToggleComplete(index)}
            className="todo-text">
                {todo.text}

        </span>
        <button onClick={()=> handleDelete(index)} className="delete-btn">
            Delete
        </button>

        </div>
    );
};

export default TodoItem;