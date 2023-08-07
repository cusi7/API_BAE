const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('company', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
    company: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      }

  }, {
    timestamps: false
  });
};