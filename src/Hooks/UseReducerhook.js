import React, { useReducer, useState } from "react";

let initialstate = 0;

const reducer = (state, action) => {
  if (action.type === "INC") {
    return state + 1;
  }
  if(action.type === "DEC"){
    return state - 1;
  }
  if(action.type === "RESET"){
    return initialstate
  }
};

// const reducer = (state, action) => {
//   if (action.type === "INC-AGE") {
//     return { age: state.age + 1 };
//   }
// };

const UseReducerhook = () => {
    const [state, dispatch] = useReducer(reducer, initialstate);
  // const [state, dispatch] = useReducer(reducer, { age: 20 });

  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => dispatch({ type: "INC" })}>INC</button>
      <button onClick={() => dispatch({ type: "DEC" })}>DEC</button>
      <button onClick={() => dispatch({ type: "RESET" })}>RESET</button>

      {/* <p>Your age is {state.age}</p>
      <button onClick={() => dispatch({ type: "INC-AGE" })}>
        Increment age
      </button> */}
    </>
  );
};

export default UseReducerhook;
