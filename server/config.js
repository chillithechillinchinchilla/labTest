// Config file to feed into db.js
// One source of truth and makes easier to swap out details.
// must create a .env file in root with data

const dotenv = require('dotenv');
dotenv.config();

// One source to rule them all


module.exports = {
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT,  
};


