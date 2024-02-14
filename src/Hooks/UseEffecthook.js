import React, { useEffect, useState } from "react";

const UseEffecthook = () => {
  const [count, setcount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setcount((count) => count + 1);
      //   console.log("rendered");
    }, 1000);
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setcount((c) => c + 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>I've rendered {count} times!</p>
      <h1>{count}</h1>
    </div>
  );
};

export default UseEffecthook;
