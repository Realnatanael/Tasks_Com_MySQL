import { Router } from "express";
import {create, deleted, getAll} from "../controllers/tasksControllers.js";
import { validateBody } from "../middlewares/tasksMiddlewares.js";

export const router = Router();

router.get('/tasks', getAll);
router.post('/tasks', validateBody, create);
router.delete('/tasks/:id', deleted);