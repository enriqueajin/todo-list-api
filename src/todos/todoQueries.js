const getTasks = "SELECT * FROM tasks"
const getTasksByUserId = "SELECT * FROM tasks WHERE user_id = $1"

module.exports = {
    getTasks,
    getTasksByUserId,
}