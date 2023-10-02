const pool = require("../../db");
const queries = require("./userQueries")

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
};

const getUserById = (req, res) => {
    const id = String(req.params.id);
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error;
        res.status(200).json(results.rows);
    });
}

const addUser = (req, res) => {
    const {user_id, first_name, last_name, email, phone_number, address} = req.body;

    pool.query(
        queries.addUser, 
        [user_id, first_name, last_name, email, phone_number, address], 
        (error, results) => {
            if (error) throw error;
            res.status(201).send("Usuario creado exitosamente.");
    });
}

const updateUser = (req, res) => {
    const id = String(req.params.id);
    const {first_name, last_name, email, phone_number, address} = req.body;

    pool.query(queries.getUserById, [id], (error, results) => {
        const noUserFound = !results.rows.length;
        if (noUserFound) {
            res.status(404).send("El usuario no existe en la base de datos.");

        } else {
            pool.query(
                queries.updateUser, 
                [first_name, last_name, email, phone_number, address, id], 
                (error, results) => {
                    if (error) throw error;
                    res.status(200).send("Usuario actualizado exitosamente.");
            });
        }
    });
}

const deleteUser = (req, res) => {
    const id = String(req.params.id);

    pool.query(queries.getUserById, [id], (error, results) => {
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
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
};