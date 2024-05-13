import { Router } from "express";
import {create, getAll} from "../controllers/tasksControllers.js";

export const router = Router();

router.get('/tasks', getAll);
router.post('/tasks', create);