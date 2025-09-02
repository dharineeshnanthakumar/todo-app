const express = require("express");
const router = express.Router();

const {
  getTasks,
  addTask,
  deleteAll,
} = require("../controllers/tasks.controller");

router.route("/").get(getTasks).delete(deleteAll).put(addTask);

module.exports = router;
