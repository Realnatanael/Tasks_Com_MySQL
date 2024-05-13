import { createTask, getAllTasks, deleteTask, updateTask } from "../models/tasksModel.js";


export const getAll = async (req, res) => {
    const tasks = await getAllTasks(req, res);
    res.status(200).json(tasks);
}

export const create = async (req, res) => {
   const created = await createTask(req.body);
    res.status(201).json(created);
}

export const deleted = async (req, res) => {
    await deleteTask(req.params.id);
    res.status(200).json({message: 'Tarefa excluída com sucesso'});
}

export const update = async (req, res) => {
    const { id } = req.params; //params é o que vem na url e body é o que vem no corpo da requisição
    const { title, status } = req.body;
    const task = { title, status };
    await updateTask(id, task);
    res.status(200).json({message: 'Tarefa atualizada com sucesso'});
}