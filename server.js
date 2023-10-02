const express = require("express");
const usersRouters = require('./src/users/userRoutes')
const tasksRouters = require('./src/todos/todoRoutes')

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello world!")
})

app.use('/api/v1/users', usersRouters);
app.use('/api/v1/tasks', tasksRouters);

app.listen(port, () => console.log(`app listening on port ${port}`));
