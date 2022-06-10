'use strict';
const { user } = require('pg/lib/defaults');
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
        username: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'users',
    });
    return users;
};