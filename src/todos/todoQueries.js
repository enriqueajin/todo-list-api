const getTasks = "SELECT * FROM tasks"

const getTaskById = `SELECT * FROM tasks WHERE task_id = $1`;

const getTasksByUserId = "SELECT * FROM tasks WHERE user_id = $1"

const addTask = `INSERT INTO tasks (user_id, status_id, title, description, due_date)
VALUES ($1, $2, $3, $4, $5)`;

const updateTask = `UPDATE tasks
SET
    status_id = $1
    title = $2,
    description = $3,
    due_date = $4
WHERE task_id = $5`;

const updateTaskStatus = `UPDATE tasks
SET
    status_id = $1
WHERE task_id = $2`;

const deleteTask = `DELETE FROM tasks WHERE task_id = $1`;

module.exports = {
    getTasks,
    getTasksByUserId,
    addTask,
    updateTask,
    updateTaskStatus,
    deleteTask,
    getTaskById,
}