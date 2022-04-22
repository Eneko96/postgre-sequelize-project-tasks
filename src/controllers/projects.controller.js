import {Project} from '../models/project.js'
import { Task } from '../models/task.js'

export const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll()
    res.json(projects)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
}

export const getProject = async (req, res) => {
  const { id } = req.params
  try {
    const project = await Project.findByPk(id)

    if (project) return res.status(404).json({ message: 'Project not found' })
    res.json(project)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
  
}

export const createProject = async (req, res) => {
  const { name, priority, description } = req.body
  try {
    const newProject = await Project.create({
      name, description, priority
    })
    res.json(newProject)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
}

export const updateProject = async (req, res) => {
  const { id } = req.params
  const { name, priority, description } = req.body
  try {
    const project = await Project.findByPk(id)
    project.name = name
    project.priority = priority
    project.description = description
    await project.save()
    res.send('updateProject')
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}

export const deleteProject = async (req, res) => {
  const { id } = req.params
  try {
    await Project.destroy({
      where: { id }
    })
    res.sendStatus(204)
  } catch (err) {
    return res.status(500).json({message: err.message})
  }
}

export const getProjectTasks = async (req, res) => {
  const { id } = req.params
  try {
    const tasks = await Task.findAll({
      where: { projectId: id }
    })
    if (!tasks) return res.status(404).json({ message: 'Tasks not found' })
    res.json(tasks)
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
}