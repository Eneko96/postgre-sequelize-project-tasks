import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Task } from './task.js'

export const Project = sequelize.define('projects', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
  },
  priority: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.STRING
  }
})

// create relation with task id -- project id
// has some of other model
Project.hasMany(Task, {
  foreinkey: "projectId",
  sourceKey: "id",
});
Task.belongsTo(Project, { foreinkey: "projectId", targetId: "id" });