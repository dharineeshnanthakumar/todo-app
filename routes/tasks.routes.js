const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  completedTask,
  deleteAll,
} = require("../controllers/tasks.controller");

router.route("/api").get(getTasks).delete(deleteAll).post(addTask);
router.route("/api/:id").delete(completedTask);

module.exports = router;
