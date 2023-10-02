const getUsers = "SELECT * FROM users";
const getUserById = "SELECT * FROM users WHERE user_id = $1";
const addUser = "INSERT INTO users (user_id, first_name, last_name, email, phone_number, address) VALUES ($1, $2, $3, $4, $5, $6)";
const deleteUser = "DELETE FROM users WHERE user_id = $1";
const updateUser = `UPDATE users
SET
    first_name = $1,
    last_name = $2,
    email = $3,
    phone_number = $4,
    address = $5
WHERE user_id = $6`;

module.exports = {
    getUsers,
    getUserById,
    addUser,
    deleteUser,
    updateUser,
};