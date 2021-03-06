require('dotenv').config();
const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbDialect: process.env.DB_DIALECT,
    apiKey: process.env.API_KEY,
    jwtKey: process.env.JWT_KEY,
}
module.exports = { config };