// We will create a config file to import env vars. https://dev.to/studio_hungry/how-to-seed-a-postgres-database-with-node-384i
// The intention is to allow for a blank customers db to be built automatically with seeded data for development. 
// If data is stored in a CSV file, you could use the 'faker library' package to import. 
// Don't forget to add two scripts to package.json in order to run the seeds. 'create-db' and 'seed' 
//"create-db": "psql -U postgres < schema.sql",
//"seed": "npm run create-db && Node index.js",
// npm run create-db, npm run seed

//config .env file contains since these values arent important right now
//PGUSER=postgres
// PGHOST=localhost
// PGPASSWORD=prlab2011
// PGDATABASE=customers 
// PGPORT=5432

// Create a pool instance and pass in the config file that contains env vars
// We export  two functions, a query which will run an insert statement

const { Pool } = require('pg');
const { host, user, database, password, port } = require ('./config');

const pool = new Pool ({
  host,
  user,
  database,
  password,
  port,
});

module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
  connect: (err, client, done) => {
    return pool.connect(err, client, done);
  },
};

// //Below is if you want a standard connection with env variables in file.
//         const Pool = require("pg").Pool;

//         const pool = new Pool({
//           user: "postgres",
//           password: "prlab2011",
//           host: "localhost",
//           port: 5432,
//           database: "customers",
//         });

//         module.exports = pool;


console.log("db ran");














// Below is if you want a standard connection with env variables in file.
        // const Pool = require("pg").Pool;

        // const pool = new Pool({
        //   user: "postgres",
        //   password: "password",
        //   host: "localhost",
        //   port: 5432,
        //   database: "customers",
        // });

        // module.exports = pool;
