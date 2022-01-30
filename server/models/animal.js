const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Animal extends Model { }

Animal.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        animal_type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        animal_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        adopt_status: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        extra_info: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        register_date: {
            type: DataTypes.DATE,
            allowNull: false,
            validate : {
                isDate: true
            }
        },
        adopt_date: {
            type: DataTypes.DATE,
            allowNull: true,
            validate : {
                isDate: true
            }
        },
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'category',
                key: 'id',
            },
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'animal',
    }
);

module.exports = Animal;
