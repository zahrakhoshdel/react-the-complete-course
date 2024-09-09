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

type Person = {
  name: string;
  age: number;
};

let person: Person;

person = {
  name: "Zahra",
  age: 30,
};

let people: Person[];

// Type inference

let course: string | number = "React - The Complete Guide";

course = 12345;
