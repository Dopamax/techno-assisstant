const Sequelize = require('sequelize');
const connection = require('../config/database');

const assisstance = connection.define('assisstance', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titre: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lien: {
        type: Sequelize.STRING,
        allowNull: true
    },
    description: {
        type: Sequelize.STRING,
        allowNull: true
    }
});

module.exports = assisstance