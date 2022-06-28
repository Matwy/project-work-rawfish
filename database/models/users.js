'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users extends Model { }
    users.init({
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        firebase_id: {
            type: DataTypes.STRING,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'users',
    });
    users.associate = function (models) {
        users.hasMany(models.fightpoints, {
            foreignKey: 'user_uuid',
            as: 'fightpoint',
        })
        users.hasMany(models.notifications, {
            foreignKey: 'user_uuid',
            as: 'notification',
        })
    }
    return users;
};