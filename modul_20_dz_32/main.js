class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInfo() {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}

class Car {
    constructor(brand, model, year, number) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.number = number;
        this.owner = null;
    }

    assignOwner(owner) {
        if (owner.age > 18) {
            this.owner = owner;
        } else {
            console.log("The car owner must be over 18 year old");
        }
    }

    displayInfo() {
        console.log(`Brand: ${this.brand}`);
        console.log(`Model: ${this.model}`);
        console.log(`Year: ${this.year}`);
        console.log(`Number: ${this.number}`);
        if (this.owner) {
            this.owner.displayInfo();
        }
    }
}

const person1 = new Person("John", 25);
const person2 = new Person("Mary", 17);

person1.displayInfo();
person2.displayInfo();

const car1 = new Car("Jeep", "Rubicon", 2010, "CA2131CA");
const car2 = new Car("Wolksvagen", "Passat", 2005, "CA2345CA");

car1.assignOwner(person1);
car2.assignOwner(person2);

car1.displayInfo();
car2.displayInfo();
