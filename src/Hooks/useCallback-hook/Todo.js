import React, { memo } from "react";

const Todo = ({ todos, addTodo }) => {
    console.log("Child rebdering..");
  return (
    <div>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodo}>Add Todo</button>
    </div>
  );
};

export default memo(Todo);
