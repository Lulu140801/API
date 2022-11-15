const { DataTypes } = require('sequelize');

module.exports = (instance) => {
    return instance.define('user', {
        token: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        }
    }, {
        timestamps: false
    });
}