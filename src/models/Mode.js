const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('mode', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    mode: {
        type: DataTypes.STRING,
        alllowNull: false,
        unique: true,
        validate: {
            isIn: [['FULL-TIME', 'PART-TIME', 'FREELANCE', 'PASANTÍA/PRÁCTICA', 'TEMPORAL', '']],
        }
    }

  }, {
    timestamps: false
  });
};