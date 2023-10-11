// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parametes

// Primitives

let age: number;
age = 0;

let userName: string;
userName = "Kim";

let isInstructor: boolean;
isInstructor = true;

// More complex types

let hobbies: string[];
hobbies = ["golf", "watch movie"];

let person: {
  name: string;
  age: number;
};
person = {
  name: "Kim",
  age: 27,
};

let people: {
  name: string;
  age: number;
}[];
people = [
  { name: "kim", age: 27 },
  { name: "lee", age: 25 },
];

// Type inference

let course = "React - The Complete Guide"; // string

// Union

let union: string | number | boolean = "React - The Complete Guide"; // string
union = 12424;
union = false;

// type aliases

type Person = {
  name: string;
  age: number;
};
let kjw: Person = {
  name: "kjw",
  age: 27,
};

// Function & types

function add(a: number, b: number): number {
  return a + b;
}

// void -> never return
function print(value: any): void {
  console.log(value);
}

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const numberArr = insertAtBeginning([1, 2, 3], 5);
const stringArr = insertAtBeginning(["1", "2", "3"], "5");
