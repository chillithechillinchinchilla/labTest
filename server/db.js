// This files sets contains information for the db location and env variables.
// Setting this up in pgadmin may be helpful.

const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "password",
  host: "localhost",
  port: 5432,
  database: "customers",
});

module.exports = pool;
