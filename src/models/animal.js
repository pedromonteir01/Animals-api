import { v4 as uuidv4 } from "uuid";

export class Animal {
    constructor(name, type, age, color, image, vaccinated) {
        this.id = this.generateId();
        this.name = name;
        this.type = type;
        this.age = age;
        this.color = color;
        this.image = image;
        this.vaccinated = vaccinated;
    }

    generateId() {
        return uuidv4();
    }
}
