const { config } = require('./../config/config');
const { Sequelize } = require('sequelize');
const setupModels = require('./../database/models');


const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(connectionString, {
    dialect: config.dbDialect,
});
setupModels(sequelize);
module.exports = sequelize