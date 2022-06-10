'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fightpoints extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    fightpoints.init({
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: true,
            refences: 'users',
            referencesKey: 'uuid'
        },
        posizione: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'fightpoints',
    });
    return fightpoints;
};