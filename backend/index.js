import express from 'express'
import cors from 'cors'
import { Sequelize } from 'sequelize'
import noteRoutes from './routes/note.routes.js'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

export const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false
  }
)

try {
  await sequelize.authenticate()
  console.log('Conexión a la base de datos exitosa')
  await sequelize.sync()
} catch (err) {
  console.error('Error al conectar a la base de datos:', err)
}

app.use('/api/notes', noteRoutes)

app.listen(3001, () => console.log('Backend escuchando en http://localhost:3001'))
