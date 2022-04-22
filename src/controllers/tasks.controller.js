import { Task } from "../models/task.js"

export const createTask = async (req, res) => {
  const { name, done, projectId } = req.body
  try {
    const newTask = await Task.create({
      name,
      done,
      projectId
    })
  
    res.json(newTask)
  } catch (err) {
    res.status(500).json({
      message: "Error creating task",
      error: err.message
    })
  }
}

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.findAll()
    console.log(tasks)
    res.json(tasks)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const getTask = async (req, res) => {
  const { id } = req.params
  try {
    const task = await Task.findOne({
      where: { id },
      // attributes: ['id', 'name'] just wanted fields
    })
    res.json(task)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const deleteTask = async (req, res) => {
  const { id } = req.params
  try {
    const result = await Task.destroy({
      where: { id }
    })
    console.log(result)
    if (!result) {
      return res.status(404).json({ message: "Task not found" })
    }
    res.status(204).json({ message: "Task deleted" })
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const updateTask = async (req, res) => {
  const { id } = req.params
  try {
    const task = await Task.findByPk(id)
    task.set(req.body)
    return res.json(task)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}