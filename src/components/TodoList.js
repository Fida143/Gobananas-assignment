// src/components/TodoList.js
import React from "react";
import "../App.css";

const TodoList = ({ todos }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <span>{`${todo.id}. `}</span>
          <span>{todo.title}</span>
          {/* <span>{todo.completed ? " (Completed)" : " (Not Completed)"}</span> */}
          <span
            className={`${
              todo.completed ? "completed" : "in-completed"
            } status`}
          >
            {todo.completed ? " (Completed)" : " (Not Completed)"}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
