/*const Sequelize = require('sequelize');

const connection = new Sequelize('db_techno_assisstant', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;*/
/*
const Sequelize = require('sequelize');

const connection = new Sequelize('postgres://ehedawfmalabrh:56b04d1cb6a643fcfdfae67b0569d97a2e2b5cb2ca91de158112cab231a804dc@ec2-35-171-250-21.compute-1.amazonaws.com:5432/dfge4mcc3gldhs');

module.exports = connection;
*/
const Sequelize = require('sequelize');

const connection = new Sequelize('dfge4mcc3gldhs', 'ehedawfmalabrh', '56b04d1cb6a643fcfdfae67b0569d97a2e2b5cb2ca91de158112cab231a804dc', {
    host: 'ec2-35-171-250-21.compute-1.amazonaws.com',
    port:5432,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false
        }
    }
});

module.exports = connection;
