'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {

        await queryInterface.bulkInsert('fightpoints', [{
            user_uuid: null,
            state: 'Italy',
            city: 'Roma',
            posizione: '41.89468900202044, 12.492545318247195',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Francia',
            city: 'Parigi',
            posizione: '48.858450290422496, 2.3484827828329675',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Portogallo',
            city: 'Lisbona',
            posizione: '38.4300, -9.0759',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Spagna',
            city: 'Madrid',
            posizione: '40.2459, -3.4209',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Germania',
            city: 'Berlino',
            posizione: '52.3127, 13.2437',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Belgio',
            city: 'Bruxelles',
            posizione: '50.5101, 4.2055',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Amsterdam',
            city: 'Paesi Bassi',
            posizione: '52.2226, 4.5322',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Lussemburgo',
            city: 'Lussemburgo',
            posizione: '49.3642, 6.0747',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Cipro',
            city: 'Nicosia',
            posizione: '35.1031, 33.2151',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Malta',
            city: 'La Valletta',
            posizione: '35.5358, 14.3052',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Irlanda',
            city: 'Dublino',
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
            state: 'Grecia',
            city: 'Atene',
            posizione: '37.5846, 23.4258',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Croazia',
            city: 'Zagabria',
            posizione: '45.4851, 15.5840',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Slovenia',
            city: 'Lubiana',
            posizione: '46.0303, 14.3018',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: 'Ungheria',
            city: 'Budapest',
            posizione: '47.2952, 19.0223',
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Somaliland",
            city: "Hargeisa",
            posizione: "9.55, 44.050000",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "South Georgia and South Sandwich Islands",
            city: "King Edward Point",
            posizione: "-54.283333, 36.500000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "French Southern and Antarctic Lands",
            city: "Port-aux-FranÃ§ais",
            posizione: "-49.35, 70.216667",
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
            state: "Aland Islands",
            city: "Mariehamn",
            posizione: "60.116667, 19.900000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Nauru",
            city: "Yaren",
            posizione: "-0.5477, 166.920867",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Saint Martin",
            city: "Marigot",
            posizione: "18.0731, 63.082200",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Tokelau",
            city: "Atafu",
            posizione: "-9.166667, 171.833333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Western Sahara",
            city: "El-AaiÃºn",
            posizione: "27.153611, 13.203333",
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
            state: "Algeria",
            city: "Algiers",
            posizione: "36.75, 3.050000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "American Samoa",
            city: "Pago Pago",
            posizione: "-14.266666666666667, 170.700000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Andorra",
            city: "Andorra la Vella",
            posizione: "42.5, 1.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Angola",
            city: "Luanda",
            posizione: "-8.833333333333334, 13.216667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Anguilla",
            city: "The Valley",
            posizione: "18.216666666666665, 63.050000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Antigua and Barbuda",
            city: "Saint John's",
            posizione: "17.116666666666667, 61.850000",
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
            state: "Armenia",
            city: "Yerevan",
            posizione: "40.166666666666664, 44.500000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Aruba",
            city: "Oranjestad",
            posizione: "12.516666666666667, 70.033333",
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
            state: "Azerbaijan",
            city: "Baku",
            posizione: "40.38333333333333, 49.866667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bahamas",
            city: "Nassau",
            posizione: "25.083333333333332, 77.350000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bahrain",
            city: "Manama",
            posizione: "26.233333333333334, 50.566667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bangladesh",
            city: "Dhaka",
            posizione: "23.716666666666665, 90.400000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Barbados",
            city: "Bridgetown",
            posizione: "13.1, 59.616667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Belarus",
            city: "Minsk",
            posizione: "53.9, 27.566667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Belgium",
            city: "Brussels",
            posizione: "50.833333333333336, 4.333333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Belize",
            city: "Belmopan",
            posizione: "17.25, 88.766667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Benin",
            city: "Porto-Novo",
            posizione: "6.483333333333333, 2.616667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bermuda",
            city: "Hamilton",
            posizione: "32.28333333333333, 64.783333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bhutan",
            city: "Thimphu",
            posizione: "27.466666666666665, 89.633333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bolivia",
            city: "La Paz",
            posizione: "-16.5, 68.150000",
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
            state: "Botswana",
            city: "Gaborone",
            posizione: "-24.633333333333333, 25.900000",
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
            state: "British Virgin Islands",
            city: "Road Town",
            posizione: "18.416666666666668, 64.616667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Brunei Darussalam",
            city: "Bandar Seri Begawan",
            posizione: "4.883333333333333, 114.933333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Bulgaria",
            city: "Sofia",
            posizione: "42.68333333333333, 23.316667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Burkina Faso",
            city: "Ouagadougou",
            posizione: "12.366666666666667, 1.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Myanmar",
            city: "Rangoon",
            posizione: "16.8, 96.150000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Burundi",
            city: "Bujumbura",
            posizione: "-3.3666666666666667, 29.350000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cambodia",
            city: "Phnom Penh",
            posizione: "11.55, 104.916667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cameroon",
            city: "Yaounde",
            posizione: "3.8666666666666667, 11.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Canada",
            city: "Ottawa",
            posizione: "45.416666666666664, 75.700000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cape Verde",
            city: "Praia",
            posizione: "14.916666666666666, 23.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cayman Islands",
            city: "George Town",
            posizione: "19.3, 81.383333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Central African Republic",
            city: "Bangui",
            posizione: "4.366666666666666, 18.583333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Chad",
            city: "N'Djamena",
            posizione: "12.1, 15.033333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Chile",
            city: "Santiago",
            posizione: "-33.45, 70.666667",
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
            state: "Christmas Island",
            city: "The Settlement",
            posizione: "-10.416666666666666, 105.716667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cocos Islands",
            city: "West Island",
            posizione: "-12.166666666666666, 96.833333",
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
            state: "Comoros",
            city: "Moroni",
            posizione: "-11.7, 43.233333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Democratic Republic of the Congo",
            city: "Kinshasa",
            posizione: "-4.316666666666666, 15.300000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Republic of Congo",
            city: "Brazzaville",
            posizione: "-4.25, 15.283333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cook Islands",
            city: "Avarua",
            posizione: "-21.2, 159.766667",
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
            state: "Cote d'Ivoire",
            city: "Yamoussoukro",
            posizione: "6.816666666666666, 5.266667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Croatia",
            city: "Zagreb",
            posizione: "45.8, 16.000000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cuba",
            city: "Havana",
            posizione: "23.116666666666667, 82.350000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "CuraÃ§ao",
            city: "Willemstad",
            posizione: "12.1, 68.916667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Cyprus",
            city: "Nicosia",
            posizione: "35.166666666666664, 33.366667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Czech Republic",
            city: "Prague",
            posizione: "50.083333333333336, 14.466667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Denmark",
            city: "Copenhagen",
            posizione: "55.666666666666664, 12.583333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Djibouti",
            city: "Djibouti",
            posizione: "11.583333333333334, 43.150000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Dominica",
            city: "Roseau",
            posizione: "15.3, 61.400000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Dominican Republic",
            city: "Santo Domingo",
            posizione: "18.466666666666665, 69.900000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Ecuador",
            city: "Quito",
            posizione: "-0.21666666666666667, 78.500000",
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
            state: "El Salvador",
            city: "San Salvador",
            posizione: "13.7, 89.200000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Equatorial Guinea",
            city: "Malabo",
            posizione: "3.75, 8.783333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Eritrea",
            city: "Asmara",
            posizione: "15.333333333333334, 38.933333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Estonia",
            city: "Tallinn",
            posizione: "59.43333333333333, 24.716667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Ethiopia",
            city: "Addis Ababa",
            posizione: "9.033333333333333, 38.700000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Falkland Islands",
            city: "Stanley",
            posizione: "-51.7, 57.850000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Faroe Islands",
            city: "Torshavn",
            posizione: "62, 6.766667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Fiji",
            city: "Suva",
            posizione: "-18.133333333333333, 178.416667",
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
            state: "France",
            city: "Paris",
            posizione: "48.86666666666667, 2.333333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "French Polynesia",
            city: "Papeete",
            posizione: "-17.533333333333335, 149.566667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Gabon",
            city: "Libreville",
            posizione: "0.38333333333333336, 9.450000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "The Gambia",
            city: "Banjul",
            posizione: "13.45, 16.566667",
            createdAt: new Date(),
            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Georgia",
            city: "Tbilisi",
            posizione: "41.68333333333333, 44.833333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Germany",
            city: "Berlin",
            posizione: "52.516666666666666, 13.400000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Ghana",
            city: "Accra",
            posizione: "5.55, 0.216667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Gibraltar",
            city: "Gibraltar",
            posizione: "36.13333333333333, 5.350000",
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
            state: "Greenland",
            city: "Nuuk",
            posizione: "64.18333333333334, 51.750000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Grenada",
            city: "Saint George's",
            posizione: "12.05, 61.750000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Guam",
            city: "Hagatna",
            posizione: "13.466666666666667, 144.733333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Guatemala",
            city: "Guatemala City",
            posizione: "14.616666666666667, 90.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Guernsey",
            city: "Saint Peter Port",
            posizione: "49.45, 2.533333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Guinea",
            city: "Conakry",
            posizione: "9.5, 13.700000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Guinea-Bissau",
            city: "Bissau",
            posizione: "11.85, 15.583333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Guyana",
            city: "Georgetown",
            posizione: "6.8, 58.150000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Haiti",
            city: "Port-au-Prince",
            posizione: "18.533333333333335, 72.333333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Vatican City",
            city: "Vatican City",
            posizione: "41.9, 12.450000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Honduras",
            city: "Tegucigalpa",
            posizione: "14.1, 87.216667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Hungary",
            city: "Budapest",
            posizione: "47.5, 19.083333",
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
            state: "India",
            city: "New Delhi",
            posizione: "28.6, 77.200000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Indonesia",
            city: "Jakarta",
            posizione: "-6.166666666666667, 106.816667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Iran",
            city: "Tehran",
            posizione: "35.7, 51.416667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Iraq",
            city: "Baghdad",
            posizione: "33.333333333333336, 44.400000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Ireland",
            city: "Dublin",
            posizione: "53.31666666666667, 6.233333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Israel",
            city: "Jerusalem",
            posizione: "31.766666666666666, 35.233333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Italy",
            city: "Rome",
            posizione: "41.9, 12.483333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Jamaica",
            city: "Kingston",
            posizione: "18, 76.800000",
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
            state: "Jersey",
            city: "Saint Helier",
            posizione: "49.18333333333333, 2.100000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Jordan",
            city: "Amman",
            posizione: "31.95, 35.933333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Kazakhstan",
            city: "Astana",
            posizione: "51.166666666666664, 71.416667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Kenya",
            city: "Nairobi",
            posizione: "-1.2833333333333332, 36.816667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Kiribati",
            city: "Tarawa",
            posizione: "-0.8833333333333333, 169.533333",
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
        {
            user_uuid: null,
            state: "Kosovo",
            city: "Pristina",
            posizione: "42.666666666666664, 21.166667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Kuwait",
            city: "Kuwait City",
            posizione: "29.366666666666667, 47.966667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Kyrgyzstan",
            city: "Bishkek",
            posizione: "42.86666666666667, 74.600000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Laos",
            city: "Vientiane",
            posizione: "17.966666666666665, 102.600000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Latvia",
            city: "Riga",
            posizione: "56.95, 24.100000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Lebanon",
            city: "Beirut",
            posizione: "33.86666666666667, 35.500000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Lesotho",
            city: "Maseru",
            posizione: "-29.316666666666666, 27.483333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Liberia",
            city: "Monrovia",
            posizione: "6.3, 10.800000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Libya",
            city: "Tripoli",
            posizione: "32.88333333333333, 13.166667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Liechtenstein",
            city: "Vaduz",
            posizione: "47.13333333333333, 9.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Lithuania",
            city: "Vilnius",
            posizione: "54.68333333333333, 25.316667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Luxembourg",
            city: "Luxembourg",
            posizione: "49.6, 6.116667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Macedonia",
            city: "Skopje",
            posizione: "42, 21.433333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Madagascar",
            city: "Antananarivo",
            posizione: "-18.916666666666668, 47.516667",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Malawi",
            city: "Lilongwe",
            posizione: "-13.966666666666667, 33.783333",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Malaysia",
            city: "Kuala Lumpur",
            posizione: "3.1666666666666665, 101.700000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Maldives",
            city: "Male",
            posizione: "4.166666666666667, 73.500000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Mali",
            city: "Bamako",
            posizione: "12.65, 8.000000",
            createdAt: new Date(),

            updatedAt: new Date()
        },
        {
            user_uuid: null,
            state: "Malta",
            city: "Valletta",
            posizione: "35.88333333333333, 14.500000",
            createdAt: new Date(),
            updatedAt: new Date()
        }
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
