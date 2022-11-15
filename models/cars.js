const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('cars', {
        use: {
            type: DataTypes.STRING,
        },
        brands: {
            type: DataTypes.STRING,
        },
        models: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    });
}