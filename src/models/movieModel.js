import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Movie = sequelize.define('Movie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING
  },
  creationDate: {
    type: DataTypes.DATE
  },
  rating: {
    type: DataTypes.INTEGER
  }
}, {
  timestamps: false
})

Movie.sync()

export default Movie
