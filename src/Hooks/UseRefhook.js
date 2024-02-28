import React, { useRef } from "react";

const UseRefhook = () => {
  //   const ref = useRef(0);

  const inputEl = useRef(null);

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  
//   const handleclick = () => {
//     ref.current = ref.current + 1;
//     alert(`you clicked ${ref.current} times`);
//   };

  return (
    <div>
      {/* <button onClick={handleclick}>Click me</button> */}
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
};

export default UseRefhook;
