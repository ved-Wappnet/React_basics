
// One of the most useful in React is the .map() array method.
// The .map() method allows you to run a function on each item in the array, returning a new array as the result.

// *Note* => if we use {} bracket we should write a return keyword and  if we use () so note need to write return keyword.

const myArray = ["apple", "banana", "orange"];

const myList = myArray.map((item) => item.toLocaleUpperCase());
console.log(myList);



