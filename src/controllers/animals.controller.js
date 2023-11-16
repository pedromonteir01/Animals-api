import { Animal } from "../models/animal.js";
import { AnimalsList } from "../models/animals.js";

const list = new AnimalsList();

const isURL = (url) => {
    return url.match(/\.(jpeg|jpg|gif|png)$/) != null;
}

export const getAllAnimals = (req, res) => {
    const type = req.query.type;
    let animals = list.getAllAnimals();
    if(!animals.length) {
        return res.status(200).send({ message: 'No animals found' });
    }

    if(type && type != null && type != "" && type != undefined) {
        console.log("entrou", type);
        console.log("animal passado", animals);
        animals = list.getTypeAnimal(type);
    } else{
        animals = list.getAllAnimals();
    }
    
    return res.status(200).send({ animals, quantity: animals.length});
}

export const getAnimalById = (req, res) => {
    const { id } = req.params;
    const animal = list.getAnimalById(id);

    if(!animal) return res.status(400).send({ message: `No animal found by id: ${id}` });

    return res.status(200).send({ animal });
}

export const postAnimal = (req, res) => {
    const { name, type, age, color, image, vaccinated } = req.body;

    if( !name || !type || !age || !color || !image || !vaccinated ) {
        return res.status(400).send({ message: 'Incomplete data' }); 
    }

    if(name.length > 50 || name.length < 3) {
        return res.status(400).send({ message: 'Invalid name' });
    }

    if(age < 0 || !(Number.isInteger(age))) {
        return res.status(400).send({ message: 'Age must be a number greater than zero and integer'});
    }

    if(type.length > 30) {
        return res.status(400).send({ message: 'Invalid type length'});
    }

    if(color.length > 20) {
        return res.status(400).send({ message: 'Invalid color length'});
    } 

    if(typeof(vaccinated) != "boolean") {
        return res.status(400).send({ message: 'Vaccination status is invalid, use true or false'});
    }

   if(!(isURL(image))) {
    return res.status(400).send({ message: 'Image is invalid'});
   }


    const animal = new Animal(name, type, age, color, image, vaccinated);

    list.createAnimal(animal);
    return res.status(201).send({ animal });
}

export const updateAnimal = (req, res) => {
    const { id } = req.params;
    const { name, type, age, color, image, vaccinated } = req.body;
    const animal = list.getAnimalById(id);
    
    if( !name || !type || !age || !color || !image || !vaccinated ) {
        return res.status(400).json({ message: 'Incomplete data' }); 
    }

    list.updateAnimal(id, name, type, age, color, image, vaccinated);

    return res.status(200).send({ animal });
}

export const deleteAnimal = (req, res) => {
    const { id } = req.params;
    const animal = list.getAnimalById(id);

    list.deleteAnimal(id);

    return res.status(200).send({ animal });
}