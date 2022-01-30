const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Adopter extends Model { }

Adopter.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        adopter_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adopter_address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        animal_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'animal',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'adopter',
    }
);

module.exports = Adopter;
