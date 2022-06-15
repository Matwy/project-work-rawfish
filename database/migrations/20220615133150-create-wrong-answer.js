'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('wrong_answers', {
            uuid: {
                type: Sequelize.UUID,
                allowNull: false,
                primaryKey: true,
                defaultValue: Sequelize.literal('uuid_generate_v4()')
            },
            question_uuid: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            wrong_answer: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('wrong_answers');
    }
};