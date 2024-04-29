class Human {
    gender = 'female';

    printGender = () => {
        console.log(this.gender);
    }
}

//Inheritance
class Person extends Human {
    name = 'Zahra';
    
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();