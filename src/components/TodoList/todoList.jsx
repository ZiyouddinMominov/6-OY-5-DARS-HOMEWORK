import React from "react";
import Todo from "../Todo/todo";
const TodoList = ({ todos, onDelete }) => {
  return (
    <div>
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} onDelete={() => onDelete(index)} />
      ))}
    </div>
  );
};

export default TodoList;