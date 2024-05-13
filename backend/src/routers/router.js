import { Router } from "express";
import {create, deleted, getAll, update} from "../controllers/tasksControllers.js";
import { validateBody, validateFields } from "../middlewares/tasksMiddlewares.js";

export const router = Router();

router.get('/tasks', getAll);
router.post('/tasks', validateBody, create);
router.delete('/tasks/:id', deleted);
router.put('/tasks/:id', validateFields, update); //o update é o mesmo que o create, só que com o método put