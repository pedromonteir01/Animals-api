import { Router } from "express";
import { 
    deleteAnimal, 
    getAllAnimals, 
    getAnimalById, 
    postAnimal, 
    updateAnimal 
} from "../controllers/animals.controller.js";

const animalRouter = Router();

animalRouter.get("/", getAllAnimals);
animalRouter.get("/:id", getAnimalById);
animalRouter.post("/", postAnimal);
animalRouter.put("/:id", updateAnimal);
animalRouter.delete("/:id", deleteAnimal);

export default animalRouter;