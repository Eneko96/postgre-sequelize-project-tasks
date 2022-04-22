import app from './app.js'
import { sequelize } from './database/database.js'
import './models/project.js'
import './models/task.js'

async function main() {
  try {
    await sequelize.sync({ force: false }) // sync with the database
    app.listen(3000)
    console.log('Server is running on port 3000')
  } catch(e) {
    console.error('Unable to connect to the database:', e)
  }

}

main()