const { Category } = require('../models');

const categoryData = [
    {
        animal_type: 'Cat',
    },
    {
        animal_type: 'Dog',
    },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
