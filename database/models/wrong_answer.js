'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class wrong_answers extends Model { }
    wrong_answers.init({
        uuid: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: sequelize.literal('uuid_generate_v4()')
        },
        question_uuid: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        wrong_answer: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    }, {
        sequelize,
        modelName: 'wrong_answers',
    });

    wrong_answers.associate = function (models) {
        wrong_answers.belongsTo(models.questions, {
            foreignKey: 'question_uuid',
            as: 'questions',
        })
    }
    return wrong_answers;
};