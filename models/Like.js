const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Like = sequelize.define('Like', {
  reactionType: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Like;
