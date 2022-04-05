const { config } = require('./../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
// npm run migrations:generate create-user para crear migraciones
module.exports = {
    development: {
        url: connectionString,
        dialect: config.dbDialect,
    },
    production: {
        url: connectionString,
        dialect: config.dbDialect,
    }
}