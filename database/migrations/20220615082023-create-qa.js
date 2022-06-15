'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('questions', {
            uuid: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.literal('uuid_generate_v4()')
            },
            question: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            correct_answer: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            fightpoint_uuid: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('questions');
    }
};