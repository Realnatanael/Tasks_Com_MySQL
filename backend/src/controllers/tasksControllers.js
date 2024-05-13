import { createTask, getAllTasks } from "../models/tasksModel.js";


export const getAll = async (req, res) => {
    const tasks = await getAllTasks(req, res);
    res.status(200).json(tasks);
}

export const create = async (req, res) => {
   const created = await createTask(req.body);
    res.status(201).json(created);
}