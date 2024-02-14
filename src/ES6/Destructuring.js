import React from "react";

const Destructuring = () => {
  const vehicletwo = {
    brand: "Ford",
    models: "Mustang",
    type: "car",
    year: 2021,
    color: "red",
    registration: {
      city: "Houston",
      state: "Texas",
      country: "USA",
    },
  };

  const {
    brand,
    models,
    type,
    color,
    registration: { city, country },
  } = vehicletwo;

  const vehicles = ["mustang", "f-150 ", " expedition"];

  const [ved, ...remaining] = vehicles;

  return (
    <>
      <h1>Car Information</h1>
      <p>Brand : {brand}</p>
      <p>Model : {models}</p>
      <p>Type : {type}</p>
      <p>Color : {color}</p>
      <p>City : {city}</p>
      <p>Country : {country}</p>

      <h3>Array Destructuring</h3>
      <p>First Value : {ved}</p>
      <p>Values are : {remaining}</p>
    </>
  );
};

export default Destructuring;
