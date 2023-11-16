import { Router } from "express";
import animalRouter from "./animals.routes.js";

const router = Router();

router.get("/", (req, res) => {
    res.status(200).send({
        message: "server OK"
    });
});

router.use("/animals", animalRouter);

export default router