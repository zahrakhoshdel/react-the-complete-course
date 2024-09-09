// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 30;

let userName: string | string[];

userName = "Zahra";

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ["Sports", "Cooking"];

let person: {
  name: string;
  age: number;
};

person = {
  name: "Zahra",
  age: 30,
};

let people: {
  name: string;
  age: number;
}[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12345;
