import { DataTypes } from 'sequelize'
import { sequelize } from './db.js'  // o donde esté db.js

const Note = sequelize.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: DataTypes.TEXT,
  archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})

export default Note
