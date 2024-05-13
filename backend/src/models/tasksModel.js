import {connection} from '../db/connection.js';

export const getAll = async (req, res) => {
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

    return createdTask; //poderia ter feito return createdTask[0] para retornar a primeira parte do array
}