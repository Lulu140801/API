const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('user', {
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