'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class fightpoints extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */

    }
    fightpoints.init({
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: true,
        },
        posizione: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'fightpoints',
    });
    fightpoints.associate = function (models) {
        // associations can be defined here
        fightpoints.belongsTo(models.users, {
            foreignKey: 'user_uuid',
            as: 'user',
        })
        fightpoints.hasMany(models.questions, {
            foreignKey: 'fightpoint_uuid',
            as: 'questions'
        })
    }
    return fightpoints;
};