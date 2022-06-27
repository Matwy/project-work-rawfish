'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class notifications extends Model { }

    notifications.init({
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        user_uuid: {
            type: DataTypes.UUID,
            allowNull: false
        },
        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        fightpoint_uuid: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'notifications',
    });
    notifications.associate = function (models) {
        notifications.belongsTo(models.users, {
            foreignKey: 'user_uuid',
            as: 'user',
        })
        notifications.belongsTo(models.fightpoints, {
            foreignKey: 'fightpoint_uuid',
            as: 'fightpoint',
        })
    }
    return notifications;
};