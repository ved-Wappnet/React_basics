import React, { useState } from "react";

const App2 = () => {
  return (
    <div>
      <h1>HOC</h1>
      <HocRed cmp={Counter} />
      <HocGreen cmp={Counter} />
      <HocBlue cmp={Counter} />
    </div>
  );
};

const HocRed = (props) => {
  return (
    <h2 style={{backgroundColor:"red",width:200}}>
      <props.cmp />
    </h2>
  );
};
const HocGreen = (props) => {
  return (
    <h2 style={{backgroundColor:"green",width:200}}>
      <props.cmp />
    </h2>
  );
};
const HocBlue = (props) => {
  return (
    <h2 style={{backgroundColor:"blue",width:200}}>
      <props.cmp />
    </h2>
  );
};

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Click To Update</button>
    </>
  );
};

export default App2;
