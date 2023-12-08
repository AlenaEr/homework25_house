class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }
}

class Apartment {
    residents = [];
    addResident(person) {
        this.residents.push(person);
    }
}

class House {
    
    constructor(maxApartments) {
        this.apartments = [];
        this.maxApartments = maxApartments;
    }

    addApartment(apartment) {
        if (this.apartments.length < this.maxApartments) {
            this.apartments.push(apartment);
        } else {
            alert(`"Досягнуто max кількість квартир. Ваш будинок розрахований на ${this.maxApartments} квартир"`);
        }
    }
}

const person1 = new Person("Sergii", "male");
const person2 = new Person("Alena", "female");
const person3 = new Person("Pavlo", "male");

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment1.addResident(person2);
apartment2.addResident(person3);
apartment3.addResident(person1);

const house = new House(2);

house.addApartment(apartment1);
house.addApartment(apartment2);
house.addApartment(apartment3);

console.log(house);