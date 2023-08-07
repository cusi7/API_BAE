const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('skill', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    skill: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }

  }, {
    timestamps: false
  });
};