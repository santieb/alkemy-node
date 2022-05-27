import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Characters = sequelize.define('Characters', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  image: {
    type: DataTypes.STRING
  },
  name: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },
  weight: {
    type: DataTypes.FLOAT
  },
  history: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
})

Characters.sync()

export default Characters
