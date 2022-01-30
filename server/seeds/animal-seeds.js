const { Animal } = require('../models');

const animalData = [
    {
        animal_type: "Cat",
        animal_name: "Missy",
        adopt_status: "Not Adopted",
        extra_info: "Mean one-eyed cat.",
        register_date: "2021/15/10",
        adopt_date: null,
        category_id: 1,
    },
    {
        animal_type: "Dog",
        animal_name: "Zarqa",
        adopt_status: "Adopted",
        extra_info: "Fluffy husky with blye eyes",
        register_date: "2021/15/04",
        adopt_date: "2021/06/09",
        category_id: 2,
    },
];

const seedAnimals = () => Animal.bulkCreate(animalData);

module.exports = seedAnimals;
