const { Tasks } = require("../models/tasks.model");

//@desc displays all current tasks
//@route GET /
const getTasks = async (req, res) => {
  const tasksDoc = await Tasks.find();
  const tasks = tasksDoc.map(({ id, task }) => ({ id, task }));
  res.json({ tasks });
};

//@desc add a task
const addTask = async (req, res) => {
  const { task } = req.body;
  const newTask = new Tasks({ task });
  const savedTask = await newTask.save();
  res.redirect('/');
};

//@desc done a task
const completedTask = async (req, res) => {
  const id = req.params;
  try {
    const user = await Tasks.findOneAndDelete(id);
    const deletedUser = await user.save();
    res.send(deletedUser);
  } catch (error) {
    res.send(error);
  }
};

//@desc clear all tasks
const deleteAll = async (req, res) => {
  index = 0;
  await Tasks.deleteMany({});
  res.status(200).send("Emptied Database!");
};

module.exports = { getTasks, addTask, completedTask, deleteAll };
