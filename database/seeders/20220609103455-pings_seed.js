'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('fightpoints', [{
            user_uuid: null,
            state: 'Italy',
            city: 'Rome',
            posizione: '41.89468900202044, 12.492545318247195',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'France',
            city: 'Paris',
            posizione: '48.858450290422496, 2.3484827828329675',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Portugal',
            city: 'Lisbon',
            posizione: '38.4300, -9.0759',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Spain',
            city: 'Madrid',
            posizione: '40.2459, -3.4209',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Germany',
            city: 'Berlin',
            posizione: '52.3127, 13.2437',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Belgium',
            city: 'Bruxelles',
            posizione: '50.5101, 4.2055',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Netherlands',
            city: 'Amsterdam',
            posizione: '52.2226, 4.5322',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Luxembourg',
            city: 'Luxembourg',
            posizione: '49.3642, 6.0747',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Malta',
            city: 'Valletta',
            posizione: '35.5358, 14.3052',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Ireland',
            city: 'Dublin',
            posizione: '53.1959, -6.1456',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Romania',
            city: 'Bucarest',
            posizione: '44.2556, 26.0622',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Greece',
            city: 'Atene',
            posizione: '37.5846, 23.4258',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Croatia',
            city: 'Zagreb',
            posizione: '45.4851, 15.5840',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Slovenia',
            city: 'Ljubljana',
            posizione: '46.0303, 14.3018',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Hungary',
            city: 'Budapest',
            posizione: '47.2952, 19.0223',
            createdAt: new Date(),
            updatedAt: new Date()
        },

        {
            user_uuid: null,
            state: "Palestine",
            city: "Jerusalem",
            posizione: "31.766666666666666, 35.233333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Afghanistan",
            city: "Kabul",
            posizione: "34.516666666666666, 69.183333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Albania",
            city: "Tirana",
            posizione: "41.31666666666667, 19.816667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Argentina",
            city: "Buenos Aires",
            posizione: "-34.583333333333336, 58.666667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Australia",
            city: "Canberra",
            posizione: "-35.266666666666666, 149.133333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Austria",
            city: "Vienna",
            posizione: "48.2, 16.366667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bosnia and Herzegovina",
            city: "Sarajevo",
            posizione: "43.86666666666667, 18.416667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Brazil",
            city: "Brasilia",
            posizione: "-15.783333333333333, 47.916667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "China",
            city: "Beijing",
            posizione: "39.916666666666664, 116.383333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Colombia",
            city: "Bogota",
            posizione: "4.6, 74.083333",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Costa Rica",
            city: "San Jose",
            posizione: "9.933333333333334, 84.083333",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Egypt",
            city: "Cairo",
            posizione: "30.05, 31.250000",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Finland",
            city: "Helsinki",
            posizione: "60.166666666666664, 24.933333",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Greece",
            city: "Athens",
            posizione: "37.983333333333334, 23.733333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Iceland",
            city: "Reykjavik",
            posizione: "64.15, -21.950000",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Japan",
            city: "Tokyo",
            posizione: "35.68333333333333, 139.750000",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "North Korea",
            city: "Pyongyang",
            posizione: "39.016666666666666, 125.750000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "South Korea",
            city: "Seoul",
            posizione: "37.55, 126.983333",
            createdAt: new Date(),

            updatedAt: new Date()
        },

        ], {});
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    }
};
