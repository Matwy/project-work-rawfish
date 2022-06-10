'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('fightpoints', {
            uuid: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()')
            },
            state: {
                type: Sequelize.STRING,
                allowNull: false
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false
            },
            user_uuid: {
                type: Sequelize.UUID,
                allowNull: true,
            },
            posizione: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('monuments');
    }
};