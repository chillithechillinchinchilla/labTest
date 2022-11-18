const express = require("express");
const pool = require("./db");

const cors = require("cors");
const app = express();

// This File handles initial routes for express server during first testing.

// Host Variables
const hostname = "127.0.0.1";
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log(`Lab Server has started on ${port} `);
});

//Get all customers in customers table.
app.get("/customers", async (req, res) => {
  console.log(`Get Request made `);
  try {
    const allCustomers = await pool.query("SELECT * FROM customers");
    res.json(allCustomers.rows);
  } catch (error) {
    console.error(error.message);
  }
});
