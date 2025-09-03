const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const tasksSchema = mongoose.Schema({
  task: { type: String, required: true },
});

tasksSchema.plugin(AutoIncrement, { inc_field: "id" });

const Tasks = mongoose.model("Tasks", tasksSchema);

module.exports = { Tasks };
