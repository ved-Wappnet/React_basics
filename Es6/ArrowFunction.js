// 1 . Normal Function Declaration == in hoisting it works
// 2 . Expression Function ==> in hoisting it gives an error
// 3.  Arrow Function   ==>  in hoisting it gives an error

// using normal function
hello = function () {
  return "Hello World!";
};

// using arrow function

hello1 = () => {
  return "Hello World!";
};

hello2 = () => "Hello World!"; // it only works if function has only one statement.

// "this" key word ==> reffered the current context
// The handling of this is also different in arrow functions compared to regular functions.

const user = {
  username: "Ved",
  price: 256,
  welcomemessage: function () {
    console.log(`${this.username} , Welcome !!!`);
    // console.log(this);
  },
};

user.welcomemessage();
user.username = "Kalp";
user.welcomemessage();
console.log(this); // In node Environment this ==> {} & In browser ==> WindowObject.

// use normal function
function thischeck() {
  let name = "ved";
  console.log(this); // global object
  console.log(this.name); // undefined
}
// thischeck()

// // using expression funtion
const thischeck1 = function () {
  let name = "ved";
  console.log(this); // global object
  console.log(this.name); // undefined
};
// thischeck1()

// using arrowfunction
const thischeck2 = () => {
  let name = "ved";
  console.log(this); // {}
  console.log(this.name); // undefined
};

// thischeck2()

//  main Example between arrow and normal  function

const obj = {
  value: 10,
  multiply: function (factor) {
    return this.value * factor;
  },
};

console.log(obj.multiply(5)); // Output: 50

// Arrow Function

const obj1 = {
  value: 10,
  multiply: (factor) => {
    return this.value * factor; // 'this' does not refer to obj
  },
};

console.log(obj1.multiply(5)); // Output: NaN
