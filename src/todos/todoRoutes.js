const { Router } = require("express");
const controller = require('./todoController')

const router = Router();

router.get("/", controller.getTasks);
router.get("/:id", controller.getTasksByUserId);

module.exports = router;