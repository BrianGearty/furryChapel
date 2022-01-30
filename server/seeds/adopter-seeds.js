const { Adopter } = require('../models');

const adopterData = [
    {
        adopter_name: "Brian Gearty",
        phone_number: "123-123-1234",
        adopter_address: "223 Rivers Edge Ln Edgewood, NJ",
        animal_id: 2,
    },
];

const seedAdopters = () => Adopter.bulkCreate(adopterData);

module.exports = seedAdopters;
