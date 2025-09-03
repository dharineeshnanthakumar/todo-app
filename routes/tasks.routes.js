const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  completedTask,
  deleteAll,
} = require("../controllers/tasks.controller");

router.route("/").get(getTasks).delete(deleteAll).put(addTask);
router.route("/:id").delete(completedTask);

module.exports = router;
