const Sequelize = require('sequelize');
const db = require('./index');

module.exports = (instance) => {
    return instance.define('modeles', {
        id: {
            field: 'modelesId',
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            field: 'name',
            type: Sequelize.STRING,
            validate: {
                notEmpty: {
                    args: true,
                    msg: 'name cannot be empty'
                }
            }
        }
    }, {
        timestamps: false
    });
}