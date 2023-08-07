const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('seniority', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    seniority: {
        type: DataTypes.STRING,
        alllowNull: false,
        unique: true,
        validate: {
            isIn: [['SIN EXPERIENCIA', 'TRAINEE', 'JUNIOR', 'SEMI SENIOR', 'SENIOR', 'EXPERT', '']],
        }
    }

  }, {
    timestamps: false
  });
};