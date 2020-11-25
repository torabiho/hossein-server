const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    dbConnectionInfo: {
        dbUrl: process.env.MONGODB_URL,
        dbName: process.env.DB_NAME
    }
};