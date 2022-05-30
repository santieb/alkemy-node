import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Genre = sequelize.define('Genre', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false
})

export default Genre
