const { DataTypes } = require('sequelize');
const { sequelize } = require('../db');

const Profile = sequelize.define('Profile', {
  bio: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  profilePicture: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  birthday: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
});

module.exports = Profile;
