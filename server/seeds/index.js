const seedCategories = require('./category-seeds');
const seedAnimals = require("./animal-seeds");
const seedAdopters = require("./adopter-seeds")


const sequelize = require('../config/connection');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();
    console.log('\n----- Categories SEEDED -----\n');

    await seedAnimals();
    console.log('\n----- Animals SEEDED -----\n');

    await seedAdopters();
    console.log('\n----- Adopters SEEDED -----\n');

    process.exit(0);
};

seedAll();

