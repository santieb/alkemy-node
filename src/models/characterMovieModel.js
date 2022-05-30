import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const characterMovie = sequelize.define('characterMovie', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
}, {
  timestamps: false
})

export default characterMovie
