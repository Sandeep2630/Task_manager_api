const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "task name can not be empty"],
    trim: true,
    maxLength: [30, "the max lenght can not be greater then 30"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});
module.exports = mongoose.model("Task", TaskSchema);
