require('dotenv').config();
const { Client } = require('pg');

const client = new Client({
    user: process.env.DBUSER,
    password: process.env.PGPASSWORD,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
});

client.connect();

module.exports = { client };
