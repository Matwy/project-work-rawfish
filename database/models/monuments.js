'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class monuments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    monuments.init({
        uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        uuid_utente: {
            type: DataTypes.UUID,
            allowNull: true
        },
        posizione: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'monuments',
    });
    return monuments;
};