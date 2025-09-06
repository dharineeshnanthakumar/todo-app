const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  completedTask,
} = require("../controllers/tasks.controller");

router.route("/api").get(getTasks).post(addTask);
router.route("/api/:id").delete(completedTask);

module.exports = router;
