class Human {
    constructor(){
        this.gender = 'female';
    }

    printGender(){
        console.log(this.gender);
    }
}

//Inheritance
class Person extends Human {
    constructor(){
        super();
        this.name = 'Zahra';
    }

    printMyName(){
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();