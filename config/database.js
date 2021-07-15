/*const Sequelize = require('sequelize');

const connection = new Sequelize('dfge4mcc3gldhs', 'ehedawfmalabrh', '56b04d1cb6a643fcfdfae67b0569d97a2e2b5cb2ca91de158112cab231a804dc', {
    host: 'ec2-35-171-250-21.compute-1.amazonaws.com',
    port:'5432',
    dialect: 'postgres'
});

module.exports = connection;*/
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