import React from "react";

const Car = (props) => {
  const present = () => {
    return "I have " + props.brand;
  };

  return (
    <div>
      <h1>{present()}</h1>
    </div>
  );
};

export default Car;
