const { Tasks } = require("../models/tasks.model");

//@desc displays all current tasks
//@route GET /
const getTasks = async (req, res) => {
  const tasksDoc = await Tasks.find();
  const tasks = tasksDoc.map(({ id, task }) => ({ id, task }));
  res.status(200).json({ tasks });
};

//@desc add a task
const addTask = async (req, res) => {
  const { task } = req.body;
  const newTask = new Tasks({ task });
  const savedTask = await newTask.save();
  res.status(201).redirect('/');
};

//@desc done a task
const completedTask = async (req, res) => {
  try {
    const task = await Tasks.findOneAndDelete({ id: req.params.id });
    res.status(200).json({ message: "task deleted successfully", task })
  } catch (error) {
    console.log(error)
    res.send(error);
  }
};


module.exports = { getTasks, addTask, completedTask };
