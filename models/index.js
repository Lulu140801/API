const { Sequelize } = require('sequelize');
const dbConfig = require('../db.config');

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    users: require('./users')(instance),
    cars: require('./cars')(instance),
    modeles: require('./modeles')(instance)
};