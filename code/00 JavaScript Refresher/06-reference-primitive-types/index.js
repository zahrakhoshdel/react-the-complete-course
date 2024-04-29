///Primitive type

//numbers, strings, booleans, these are so-called primitive types
//whenever you reassign or you store a variable in another variable
const number = 1;
const num2 = number; //create a real copy of number

console.log(num2);


///Reference type

//objects and arrays are reference types
//person the object is stored in memory 
//and in the constant person we store a pointer to that place in memory
const person = {
    name: 'Zahra'
}; 
const secondPerson = person; // that pointer will be copied not the values

person.name = 'Max';

console.log(secondPerson); // name: "Max"

//creating a real copy by using spread operator
const person2 = {
    name: 'Zahra'
};
const thirdPerson = {
    ...person2
};

person.name = 'Max';

console.log(thirdPerson); // name: "Zahra"