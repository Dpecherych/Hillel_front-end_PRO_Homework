class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    constructor() {
        this.residents = [];
    }

    addResident(person) {
        this.residents.push(person);
    }
}

class Building {
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Maximum number of apartments reached in the building.");
        }
    }
}

const person1 = new Person("Anna", "female");
const person2 = new Person("Peter", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);

const building = new Building(2);

building.addApartment(apartment1);
building.addApartment(apartment2);

console.log(person1);
console.log(person2);
console.log(apartment1);
console.log(apartment2);
console.log(building);