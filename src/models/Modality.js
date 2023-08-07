const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('modality', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    modality: {
        type: DataTypes.STRING,
        alllowNull: false,
        unique: true,
        validate: {
            isIn: [['PRESENCIAL', 'HIBRIDO', 'REMOTO', '']],
        }
    }

  }, {
    timestamps: false
  });
};