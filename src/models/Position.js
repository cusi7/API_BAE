const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('position', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    position: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }

  }, {
    timestamps: false
  });
};