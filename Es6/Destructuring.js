// We may have an array or object that we are working with, but we only need some of the items contained in these.

// Destructuring Arrays

// Before -- accesing the particular items
const vehicles = ["mustang", "f-150", "expedition"];

const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

// After -- accesing the particular items

// Example - 1
const vehicles1 = ["mustang", "f-150", "expedition"];

const [car1, truck1, suv1] = vehicles;
console.log(car1, truck1, suv1);

// Example - 2

function calculate(a, b) {
  const add = a + b;
  const subtract = a - b;
  const multiply = a * b;
  const divide = a / b;

  return [add, subtract, multiply, divide];
}

const [add, subtract, multiply, divide] = calculate(4, 7);
console.log(add); // 11
console.log(subtract); // -3
console.log(multiply); // 28
console.log(divide); // 0.5714285714285714

// Destructuring Objects

// Example - 1

const vehicleOne = {
  brand: "Ford",
  model: "Mustang",
  type: "car",
  year: 2021,
  color: "red",
};

const { brand, type, model, year, color } = vehicleOne;
console.log(brand, type, model, year, color); // Ford car Mustang 2021 red

// using function

const myvehical = ({ brand, type, model, year, color }) => {
    const message = 'My ' + type + ' is a ' + color + ' ' + brand + ' ' + model + '.';
    return message
};
console.log(myvehical(vehicleOne)); // My car is a red Ford Mustang.


// nested Object

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

  const { models, registration: { city } } = vehicletwo;
  console.log(model,city);

// Using function
const myvehical2 = ({ models, registration: { city } }) => {
  const message = "I have a " + models + "in " + city;
  return message;
};

console.log(myvehical2(vehicletwo));
