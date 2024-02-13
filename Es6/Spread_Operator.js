// allows us to quickly copy all or part of an existing array or object into another array or object.

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];
console.log(numbersCombined);

// The spread operator is often used in combination with destructuring.

const numbers = [1, 2, 3, 4, 5];

const [first, two,three,...rest] = numbers;
console.log(numbers);
console.log(first);  // 1
console.log(rest);  // [ 4, 5 ]

// Spread Oprator in Object

const myVehicle = {
  brand: "Ford",
  model: "Mustang",
  color: "red",
};

const updateMyVehicle = {
  type: "car",
  year: 2021,
  color: "yellow",
};

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle };
console.log(myUpdatedVehicle); // here  it override the color property




// destructuring

const person = {
    name: 'John',
    age: 30,
    country: 'USA'
  };
  
  // Destructuring with spread operator
  const { name, ...details } = person;
  
  console.log(name); // Output: John
  console.log(details); // Output: { age: 30, country: 'USA' }
  