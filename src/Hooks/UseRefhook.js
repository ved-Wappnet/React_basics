import React, { useRef } from "react";

const UseRefhook = () => {
  const ref = useRef(0);

  const handleclick = () => {
    ref.current = ref.current + 1;
    alert(`you clicked ${ref.current} times`)
  }

  return <div>
    <button onClick={handleclick}>Click me</button>
  </div>;
};

export default UseRefhook;
