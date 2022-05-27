import dotenv from 'dotenv'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'

import { swaggerDocs, swaggerUI } from './config/swagger.js'

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(helmet())
app.use(morgan('tiny'))
dotenv.config()

app.use('/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocs))

import usersRoutes from './routes/usersRoutes.js'
app.use('/api/auth', usersRoutes)

import charactersRoutes from './routes/charactersRoutes.js'
app.use('/api/characters', charactersRoutes)

import moviesRoutes from './routes/moviesRoutes.js'
app.use('/api/movies', moviesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))
