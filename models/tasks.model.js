const mongoose = require("mongoose");

const tasks = mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  task: { type: String, required: true },
});

module.exports = mongoose.model("Tasks", tasks);
