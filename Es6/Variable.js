// Before the Es6 to declare the variable we use "var" keyword.
// now In Es6 includes "let" and "const" variable.

var a1 = 5.6; // -- global scope
// If you use var inside of a block, i.e. a for loop, the variable is still available outside of that block.

let b1 = 5.6; // -- blocked scope
// If you use let inside of a block, i.e. a for loop, the variable is only available inside of that loop.

const c1 = 5.6; // -- block scope
// const is a variable that once it has been created, its value can never change.

// using var keyword..
var x = 10;
if (x > 5) {
  var y = 20;
  console.log("Inside if block: " + y); // Output: Inside if block: 20
}
console.log("Outside if-else block: " + x); // Output: Outside if-else block: 10
console.log(y); // Output: 2

// using let keyword...
var a = 10;
if (a > 5) {
  let b = 20;
  console.log("Inside if block: " + b); // Output: Inside if block: 20
}
console.log("Outside if-else block: " + a);
console.log(b); // ReferenceError: b is not defined

// using const keyword..
var p = 10;
if (p > 5) {
  // 'const' requires initialization
  const q = 20;
  console.log("Inside if block: " + q); // Output: Inside if block: 20
}
console.log("Outside if-else block: " + p); // Output: Outside if-else block: 10
console.log(q); // ReferenceError: q is not defined