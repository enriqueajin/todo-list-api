const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "todo_list",
    password: "root",
    port: 5432
})

module.exports = pool;