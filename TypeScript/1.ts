//       ************* Define the Variables *************

let myName: String = "Ved";
let myAge: Number = 20;
let pi: Number = 3.147;
let myNeg: Number = -5;
// console.log(myName);

let myNum = 10;
// console.log(myNum.toString());

//             ************* Check *************

let computedValue: number = Math.sqrt(16);

let nanvalue: number = NaN;
// console.log(nanvalue);

// Practice Questions
const longText: string = "This is the long string of the longText variable";
const shortText: string = longText.substring(0, 10);
// console.log("shortText:", shortText);

const str1: string = "hello";
const str2: string = "hi";

const areEqual: boolean = str1 == str2;
// console.log("areEqual: ", areEqual);

const product: string = "Biscut";
const price: number = 34;

// console.log(`The product ${product} is priced at ${price} dollars.`);

//              ************* BIGINT AND BOOLEAN TYPES IN TS ***************

const divide = (a: number): boolean => {
  return a % 4 === 0 && a % 8 === 0;
};

let bignumber = 9007199254740992n;
// console.log(bignumber);
let anothernumber = BigInt("90071992547409925");
// console.log(anothernumber);

let diffrence: bigint = bignumber + anothernumber;
let diffrence2: bigint = bignumber - anothernumber;
let diffrence3: bigint = bignumber * anothernumber;
let diffrence4: bigint = bignumber / anothernumber;
// console.log(diffrence)
// console.log(diffrence2)
// console.log(diffrence3)
// console.log(diffrence4)

//               ************* ANY *************

let myfavNum: any = 5;
myfavNum = "ved";
// console.log(myfavNum);

//              ************* UNKNOW ***************

let num2: unknown;
num2 = 5;
num2 = "ved";
num2 = true;

if (typeof num2 === "number") {
  console.log(num2 + 5);
} else if (typeof num2 === "boolean") {
  console.log(num2);
}

async function fetchData(): Promise<unknown> {
  const response = await fetch("https://randomuser.me/api?results=5");
  const data = await response.json();
  return data;
}

async function processData() {
  const response = await fetchData();

  if (typeof response === "object") {
    console.log(response);
  }
}

// processData();

// ************* FUNCTIONS *************

// const greeting = (name:string, id:number) => {
//   console.log(`Welcome , ${name} and your id is ${id}`);
// };
// greeting("Ved",7);

// ************* FUNCTIONS RETURN TYPE *************

const greeting = (name: string, id: number): string => {
  return `Welcome , ${name} and your id is ${id}`;
};

console.log(greeting("Ved", 7));

// EX - palindrom

const ispalindrom = (str: string): boolean => {
  return str === str.toString().split("").reverse().join("");
};

console.log(ispalindrom("12321"));

// EX- AVG

const findAVG = (arr: number[]): number => {
  let sum = arr.reduce((val1, val2) => {
    return val1 + val2;
  });

  let avg = sum / arr.length;
  return avg;
};

// console.log(findAVG([1, 2, 3, 4, 5, 6]));

// Ex - MAX VALUE

const MaxValue = (arr1: number[]): number => {
  let num = arr1[0];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] > num) {
      num = arr1[i];
    }
  }
  return num;
};
// console.log(MaxValue([1, 2, 3, 4, 5, 6,8]));

// *********** OPTIONAL AND DEFAULT PARAMETER ***************

// DEFAULT
const greet = (firstname: string, lastname: string, id: number = 1) => {
  return `Welcome , ${firstname} ${lastname} and your id is ${id}`;
};
// console.log(greet("ved", "panchal"));

//OPTIONAL
const greet1 = (firstname: string, id?: number) => {
  if (id) {
    return `Welcome , ${firstname} and your id is ${id}`;
  }
  return `Welcome , ${firstname}`;
};
// console.log(greet1("ved"));

//              ************ ARRAYS **************

// a) Three Way to defin Array

// 1. Using SqareBracket.
let numbers: number[] = [1, 5, 3, 8, 6, 2];

// 2. Usinng Array Contructor
let numbers2: number[] = new Array(1, 5, 3, 8, 6, 2);

// 3. Using Array.of methods
let names: string[] = Array.of("ved", "kalp", "panchal");

//               ******** ARRAY METHODS AND ITREATION ***********

let fruits: string[] = ["apple", "bannana", "orange", "mango"];

const updatefruits = fruits.push("Kiwi");
// console.log(updatefruits); //5
// console.log(fruits);

const lastdata = fruits.pop();
// console.log(lastdata); // Kiwi
// console.log(fruits);

// MAP
let doubledata: number[] = numbers.map((curr: number) => curr * 2);

// Number to String

let numberTostring: string[] = numbers.map((curr: number) => curr.toString());

// Ex - MAP , REDUCE AND FILTER

// 1 - Convert upppercase
let newstr: string[] = ["ved", "panchal", "kalp"];

let uppercasestr: string[] = newstr.map((str: string) => {
  return str.toUpperCase();
});
// console.log(uppercasestr);

// FILTER EX

// 1 -  string length greter than 5

let grertstr: string[] = newstr.filter((curr) => curr.length > 5);
// console.log(grertstr);

// 2 - filter the words strats with A letter

let str: string[] = ["Alice", "Bob", "Ved", "Anna", "Alex"];

let findstr: string[] = str.filter((curr) => curr[0] === "A");
// console.log(findstr);

// ********** OBJECTS *************

// TYPE ALIAS

type Person = {
  name: string;
  age: number;
  address: { city: string; country: string };
};

const person: Person = {
  name: "John",
  age: 30,
  address: {
    city: "Anytown",
    country: "USA",
  },
};
const Person1: Person = {
  name: "Ved",
  age: 20,
  address: {
    city: "Ahemdabad",
    country: "INDIA",
  },
};

// EX - function to calculate and  returns total price(price * qauntity)

type Product = {
  name: string;
  price: number;
  quantity: number;
};

let product1: Product = {
  name: "laptop",
  price: 130000,
  quantity: 5,
};

const CalculateTotalPrice = (product1: Product) => {
  return product1.price * product1.quantity;
};

console.log(CalculateTotalPrice(product1));

// ********* CALL SIGNATURE **********

type Student = {
  name: string;
  age: number;
  gender?: string;
  greet: (country: string) => string;
};

const student1: Student = {
  name: "Ved",
  age: 20,
  greet: (country): string =>
    `Hello, My Name is ${student1.name} and i'm ${student1.age}yrs old & I am from ${country}`,
};
const student2: Student = {
  name: "Kalp",
  age: 24,
  greet: (country): string =>
    `Hello, My Name is ${student2.name} and i'm ${student2.age}yrs old & I am from ${country}`,
};

const Introduction = (student1: Student) => {
  const { name, age } = student1;
  return `Hello, My Name is ${name} and i'm ${age}yrs old`;
};

// console.log(Introduction(student1));
console.log(student1.greet("India"));
console.log(student2.greet("Australia"));

// ENUM -- PENDING

// ************** TUPLES *************

//  ALLOW TO US FIXED SIZE OF COLLECTIONS

type PersonInfo = readonly [string, number, boolean]; // the readOnly property don't give a permission to chnages in tuple

const displayInfo = (person: PersonInfo) => {
  const [name, age, isStudent] = person;
  console.log(`Name: ${name} , Age : ${age} , isStudent:${isStudent ? "YES" : "NO"}`);
};

const person1:PersonInfo = ["ved", 7, true];

displayInfo(person1);
