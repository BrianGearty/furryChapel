// import models

const Category = require('./category');
const Animal = require("./animal")
const Adopter = require("./adopter")

Animal.belongsTo(Category, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
});

Category.hasMany(Animal, {
    foreignKey: 'category_id',
});

Adopter.belongsTo(Animal, {
    foreignKey: 'animal_id',
    onDelete: "CASCADE",
});

Animal.hasMany(Adopter), {
    foreignKey: "animal_id",
    onDelete: "CASCADE"
}



module.exports = {
    Category,
    Animal,
    Adopter
};
