//array destructuring
const numbers = [1, 2, 3];
[num1, num2] = numbers;
[num1, , num3] = numbers;

console.log(num1, num2);
console.log(num1, num3);

//object destructuring
const person = {name: 'Zahra', age: 28};
const {name} = person;

console.log(name);

//sample2
const printName = ({name}) => {
    console.log(name);
}
printName({name: 'Zahra', age: 28});