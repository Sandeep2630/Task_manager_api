const Task = require("../modals/task");
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});

    console.log(tasks);

    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOne({ _id: taskId });
    if (!task) {
      return res
        .status(404)
        .json({ message: `could not find the task with id ${taskId}` });
    }
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskId }, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskId } = req.params;

    const task = Task.findOneAndDelete({ _id: taskId });

    if (!task) {
      return res.status(404).json({ message: `no item found with ${taskId}` });
    }
    res.status(200).json({ message: `deleted item with id ${taskId}` });
  } catch (error) {
    res.status(500).json({ error });
  }
};

module.exports = {
  getAllTasks,
  getTask,
  updateTask,
  createTask,
  deleteTask,
};
