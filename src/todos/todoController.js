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
    pool.query(queries.getTaskById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows);
    })
};

module.exports = {
    getTasks,
    getTasksByUserId,
};