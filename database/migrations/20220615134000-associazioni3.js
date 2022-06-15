'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addConstraint('fightpoints', {
            fields: ['user_uuid'],
            type: 'foreign key',
            name: 'associazione fightpoint-user',
            references: {
                table: 'users',
                field: 'uuid'
            }
        })
        await queryInterface.addConstraint('questions', {
            fields: ['fightpoint_uuid'],
            type: 'foreign key',
            name: 'associazione fightpoint-qa',
            references: {
                table: 'fightpoints',
                field: 'uuid'
            }
        })
        await queryInterface.addConstraint('wrong_answers', {
            fields: ['question_uuid'],
            type: 'foreign key',
            name: 'associazione questions-wrong_answers',
            references: {
                table: 'questions',
                field: 'uuid'
            }
        })
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeConstraint('fightpoints', 'associazione fightpoint-user')
        await queryInterface.removeConstraint('questions', ' fightpoint-questions')
        await queryInterface.removeConstraint('wrong_answers', 'associazione questions-wrong_answers')
    }
};
