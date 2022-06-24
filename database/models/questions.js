'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Questions extends Model { }

    Questions.init({
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        question: {
            type: DataTypes.STRING,
            allowNull: false
        },
        correct_answer: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fightpoint_uuid: {
            type: DataTypes.UUID,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'questions',
    });
    Questions.associate = function (models) {
        Questions.belongsTo(models.fightpoints, {
            foreignKey: 'fightpoint_uuid',
            as: 'fightpoint'
        })
        Questions.hasMany(models.wrong_answers, {
            foreignKey: 'question_uuid',
            as: 'wrong_answers',
        })
    }
    return Questions;
};