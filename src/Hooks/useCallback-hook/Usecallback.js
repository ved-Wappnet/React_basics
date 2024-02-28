import React, { useCallback, useState } from "react";
import Todo from "./Todo";

const Usecallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, "New Todo"]);
  },[todos]);

//   const addTodo = () => {
//     setTodos((prev) => [...prev, "New Todo"]);
//   };
  return (
    <div>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
};

export default Usecallback;
