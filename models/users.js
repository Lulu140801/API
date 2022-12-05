const Sequelize = require('sequelize');
var sequelize = new Sequelize('sqlite:db.sqlite');

module.exports = sequelize.define('playlist', {
    id: {
        field: 'PlaylistId',
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        field: 'Name',
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