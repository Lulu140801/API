const { Sequelize } = require("sequelize");

const dbConfig = module.exports = {
    dialect: "sqlite",
    storage: "./mydb.sqlite"
}

const instance = new Sequelize({
    dialect: dbConfig.dialect,
    storage: dbConfig.storage
});

module.exports = {
    instance,
    users: require('./users.js')(instance),
    cars: require('./cars.js')(instance)
};