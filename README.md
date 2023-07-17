# labTest

Database setup:
-Install Postgresql
-Add psql to environmental variables /bin
-In cmd, psql -U postgres
-Enter pw
-While in psql type: \i schema.sql to run import file.

Server Notes:

-   npm install
-   create or copy the .env for the needed settings.
-   note, it should not have a name, simply ".env"
-   Spin up server with: node server.js
-   Should receive 'Lab Server has started on port'
-   GPport 5432, server 5000, front end 3000

Front End Notes:

-   npm install
-   Navigate to client folder and eneter: npm start
-   It should run and open in browser automatically

---

Client: HTML / JavaScript / CSS / React / React Router

-   index.js is your home, it simply contains the React App
-   App.js contains your main React Application. In a single page sytle webpage, you could just import your individual reactcomponents (AKA the stuff from / components) here and be done. However, we need several pages with tons of backend APIs, so we use a form of React Router to organize and serve each individual page / route (AKA the stuff from / pages) as needed.

-   Components: The /components folder contains small react modules. These can be reused on different pages.
-   Pages & Routes: The /pages folder containts the actual webpages. You can import repeatable react modules into your page to reduce complexity and typing.

APIs:

-   The /apis folder contains AXIOS commands for reaching diffent parts of the server / DB. In short, it contains the base URL for a given set of interactions, so when interfacing, you do not need to keep typing long url strings. reducing user error

---

Server: Node / Express / Postgresql

-   Currently just have server.js which handles any backend Posts / updates/ gets ect. React Components will contain the needed buttons, IDs, ect to send information to the server routes.

Seed.sql

-   Simply contains some of the sql tables for reference, it is not actually used currently.

Schema.sql

-   This is used in import script to actually create a default database and populate it with tables and data.

db.js

-   Sets up the database connection to postgres

config.js

-   Used to import database specifics for db.js. like port, password ect.

.env

-   This file actually contains the password and database information. - Config.js imports it's information from this file, and sends it to db.js. This is is not automatically logged or backed up to github so that your password and vital information is not passed to to very friendly internet.
    pgadmin port 5432
    node server port 5000
    react port 3000
