// The ternary operator is a simplified conditional operator like if / else.
// Syntax: condition ?  if true : if false

// Example - 1
const isHappy = true;
const mood = isHappy ? "happy" : "not happy";
console.log(`I am ${mood}.`); // Output: I am happy.

// Example - 2
const number = 10;
const message = number > 0 ? "Positive" : number === 0 ? "Zero" : "Negative";
console.log(message); // Output: Positive

// Example -
function trueFunction() {
  console.log("The condition is true.");
}

function falseFunction() {
  console.log("The condition is false.");
}

function checkCondition(condition) {
  condition ? trueFunction() : falseFunction();
}

checkCondition(true);
checkCondition(false);
