const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('voiture', {
        disponible: {
            type: DataTypes.STRING,
        },
        marques: {
            type: DataTypes.STRING,
        },
        modeles: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    });
}