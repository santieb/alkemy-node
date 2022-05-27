import dotenv from 'dotenv'
import express from 'express'
import sequelize from './config/database.js'

const app = express()
dotenv.config()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

import usersRoutes from './routes/usersRoutes.js'
app.use('/api/auth', usersRoutes)

import charactersRoutes from './routes/charactersRoutes.js'
app.use('/api/characters', charactersRoutes)

import moviesRoutes from './routes/moviesRoutes.js'
app.use('/api/movies', moviesRoutes)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Server listening on port ${PORT}`))