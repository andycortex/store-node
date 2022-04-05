const { Client  } = require('pg');
const { config } = require('./../config/config');


async function getConnection() {
    const USER = encodeURIComponent(config.dbUser);
    const PASSWORD = encodeURIComponent(config.dbPassword);
    const connectionString = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;
    const client  = new Client({
        connectionString : connectionString,
        // host: 'localhost',
        // port: 5432,
        // user: 'andrea',
        // password: 'admin123',
        // database: 'my_store',
    });
    await client.connect();
    return client;
}
module.exports = getConnection;