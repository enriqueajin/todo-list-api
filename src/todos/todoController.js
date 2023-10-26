const pool = require("../../db");
const queries = require("./todoQueries");

const getTasks = (req, res) => {
    pool.query(queries.getTasks, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getTasksByUserId = (req, res) => {
    const id = String(req.params.id);
    pool.query(queries.getTasksByUserId, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
};

const getTaskById = (req, res) => {
    const id = String(req.params.id);
    pool.query(queries.getTaskById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
};

const addTask = (req, res) => {
    const {user_id, status_id, title, description, due_date} = req.body;

    pool.query(
        queries.addTask, 
        [user_id, status_id, title, description, due_date], 
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Tarea creado exitosamente.");
    });
}

const updateTask = (req, res) => {
    const id = String(req.params.id);
    const {status_id, title, description, due_date} = req.body;

    pool.query(queries.getTasksByUserId, [id], (error, results) => {
        const noTaskFound = !results.rows.length;
        if (noTaskFound) {
            res.status(404).send("La tarea no existe en la base de datos.");

        } else {
            pool.query(
                queries.updateTask, 
                [first_name, last_name, email, phone_number, address, id], 
                (error, results) => {
                    if (error) throw error;
                    res.status(200).send("Tarea actualizada exitosamente.");
            });
        }
    });
}

const updateTaskStatus = (req, res) => {
    const id = String(req.params.id);
    const {status_id} = req.body;

    pool.query(queries.getTasksByUserId, [id], (error, results) => {
        const noTaskFound = !results.rows.length;
        if (noTaskFound) {
            res.status(404).send("La tarea no existe en la base de datos.");

        } else {
            pool.query(
                queries.updateTaskStatus, 
                [status_id, id], 
                (error, results) => {
                    if (error) throw error;
                    res.status(200).send("El status de la tarea fue actualizado exitosamente.");
            });
        }
    });
}

const deleteTask = (req, res) => {
    const id = String(req.params.id);

    pool.query(queries.getTaskById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.status(404).send("El usuario no existe en la base de datos.");

        } else {
            pool.query(queries.deleteUser, [id], (error, results) => {
                if (error) throw error;
                res.status(200).send("Usuario eliminado exitosamente.");
            });
        }
    });
};


module.exports = {
    getTasks,
    getTasksByUserId,
    getTaskById,
    addTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
};