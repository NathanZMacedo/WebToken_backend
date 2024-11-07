import { Router } from "express";
import ComidaController from "../controllers/ComidaController.js";

const comidaRouter = Router();

comidaRouter.get("/", ComidaController.getAllComidas);

comidaRouter.post("/create", ComidaController.createComida);

comidaRouter.get("/info/:id", ComidaController.getComidaById);

comidaRouter.put("/edit/:id", ComidaController.updateComida);

comidaRouter.delete("/delete/:id", ComidaController.deleteComida);

export default comidaRouter;