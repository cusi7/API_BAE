const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
 
  sequelize.define('interview', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    date: {
        type: DataTypes.DATEONLY
    },
    description: {
        type: DataTypes.STRING(5000)
    },   
    link: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        }
    },
    passed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
    

  }, {
    timestamps: false
  });
};