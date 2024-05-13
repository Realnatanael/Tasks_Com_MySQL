import { Router } from "express";
import {getAll} from "../controllers/tasksControllers.js";

export const router = Router();

router.get('/tasks', getAll);