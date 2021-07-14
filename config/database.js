const Sequelize = require('sequelize');

const connection = new Sequelize('db_techno_assisstant', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;