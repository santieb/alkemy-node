import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Users = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },  
  password: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false,
})

Users.sync()

export default Users
