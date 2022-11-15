const { Sequelize } = require("sequelize");
const dbConfig = require('../db.config.js');

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    marques: require('./voiture.js')(instance),
    disponible: require('./user.js')(instance),
    users: require('./user')(instance)
};