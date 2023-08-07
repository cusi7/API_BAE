const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
 
  sequelize.define('application', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    remuneration: {
        type: DataTypes.INTEGER,
        validate: {
            min: 0
        }
    },
    currency: {
        type: DataTypes.STRING,
        validate: {
            isIn: [['USD', '$', 'OTRO', '']],
        }
    },
    postulation: {
        type: DataTypes.STRING
    },
    contact: {
        type: DataTypes.STRING
    },
    annotations: {
        type: DataTypes.STRING(5000)
    },
    candidate: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },
    favorite: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }


  }, {
    timestamps: false
  });
};