const Tasks = require("../models/tasks.model");

//@desc displays all current tasks
//@route GET /
const getTasks = async (req, res) => {
  const tasksDoc = await Tasks.find();
  const task = tasksDoc.map((t) => t.task);
  res.json(task);
};

//@desc add a task
const addTask = async (req, res) => {
  const { id, task } = req.body;
  const newTask = new Tasks({ id, task });
  const savedTask = await newTask.save();
  res.json(savedTask);
};

const deleteAll = async (req, res) => {
  await Tasks.deleteMany({});
  res.status(200).send("Emptied Database!");
};

module.exports = { getTasks, addTask, deleteAll };
