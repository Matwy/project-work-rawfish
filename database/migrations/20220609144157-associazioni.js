'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('fightpoints', {
            fields: ['user_uuid'],
            type: 'foreign key',
            name: 'associazione ping-user',
            references: {
                table: 'users',
                field: 'uuid'
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('fightpoints', 'associazione ping-user')
    }
};
