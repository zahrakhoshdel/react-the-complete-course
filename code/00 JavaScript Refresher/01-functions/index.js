///Functions
//normal function
function printMyName(name){
    console.log(name);
}
printMyName('Zahra');

//Arrow function (1 argument)
const printMyName1 = name => {
    console.log(name);
}
printMyName1('Zahra');

//Arrow function (no arguments)
const printMyName2 = () => {
    console.log('Zahra');
}
printMyName2();

//Arrow function (more than 1 arguments)
const printMyNameAndAge = (name, age) => {
    console.log(name, age);
}
printMyNameAndAge('Zahra', '28');

//multiply function
const multiply = (number) => {
    return number * 2;
}
console.log(multiply(2));

//short version of multiply function
const multiply1 = (number) => number * 2;

console.log(multiply(2));