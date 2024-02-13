import React from "react";

const Model = ({ brand, model }) => {
  const present = () => {
    return "I have " + brand;
  };

  const show = () => {
    return present() + " it's a " + model;
  };
  
  return (
    <div>
      <h1>{show()}</h1>
    </div>
  );
};

export default Model;
