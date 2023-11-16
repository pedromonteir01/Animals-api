export class AnimalsList {
    constructor() {
        this.list = [];
    }

    getAllAnimals() {
        return this.list;
    }

    getAnimalById(id) {
        return this.list.find((animal) => animal.id == id);
    }

    createAnimal(animal) {
        this.list.push(animal);
    }

    updateAnimal(id, name, type, age, color, image, vaccinated) {
        const animal = this.getAnimalById(id);

        if(animal) {
            animal.name = name;
            animal.type = type;
            animal.age = age;
            animal.color = color;
            animal.image = image;
            animal.vaccinated = vaccinated;
            animal.id = id;
        }

        return animal;
    }

    deleteAnimal(id) {
        return this.list = this.list.find((animal) => animal.id !== id);
    }

    getTypeAnimal(type) {
        return this.list.find((animal) => animal.type == type);

    }
}

