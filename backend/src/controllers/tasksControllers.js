import { getAll as getAllTasks } from '../models/tasksModel.js';

export const getAll = async (req, res) => {
    const tasks = await getAllTasks(req, res);
    res.status(200).json(tasks);
}