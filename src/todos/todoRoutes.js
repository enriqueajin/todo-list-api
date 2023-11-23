const { Router } = require("express");
const controller = require("./todoController");

const router = Router();

router.get("/", controller.getTasks);
router.get("/user/:id", controller.getTasksByUserId);
router.post("/", controller.addTask);
router.put("/:id", controller.updateTask);
router.put("/:id", controller.updateTaskStatus);
router.delete(":/id", controller.deleteTask);

module.exports = router;
