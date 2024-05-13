import {connection} from '../db/connection.js';

export const getAllTasks = async (req, res) => {
    const tasks = await connection.execute('SELECT * FROM tasks');
    //Eu poderia também deixar tasks como [tasks] aí ele retornatria a 1 parte do meu array que é tasks
    return tasks[0];
};

export const createTask = async (task) => {
    const { title } = task;

    const dateUTC = new Date(Date.now()).toUTCString();

    const query = 'INSERT INTO tasks (title, status, created_at) VALUES (?, ?, ?)';

    const [createdTask] = await connection.execute(query,
        [title, 'pendente', dateUTC]
    );

    return {insertId: createdTask.insertId}; //poderia ter feito return createdTask[0] para retornar a primeira parte do array
}

export const deleteTask = async (id) => {
    const query = 'DELETE FROM tasks WHERE id = ?';
    await connection.execute(query, [id]);

    return {message: 'Tarefa excluída com sucesso'};
}

export const updateTask = async (id, task) => {
    const { title, status } = task;
    const query = 'UPDATE tasks SET title = ?, status = ? WHERE id = ?';
    await connection.execute(query, [title, status, id]);

    return {message: 'Tarefa atualizada com sucesso'};
}