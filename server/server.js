const express = require("express");
const pool = require("./db");

const cors = require("cors"); // allows other domains to make requests
const app = express();

// This File handles initial routes for express server during first testing.

// Host Variables
const hostname = "127.0.0.1";
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Lab Server has started on ${port} `);
});

//New get function with AXIOS
app.get("/api/v1/customers", async (req, res) => {
    console.log("New Get Request Made.");
    try {
        const results = await pool.query("SELECT * FROM customers");
        res.status(200).json({
            status: "success",
            results: results.rows.length,
            data: {
                customers: results.rows,
            },
        });
    } catch (error) {
        console.log(error);
    }
});

// DELETE a customer based on id. AXIOS
app.delete("/api/v1/customers/:id", async (req, res) => {
    console.log("Delete customer request made.");
    try {
        const { id } = req.params;
        console.log("req.params looks like: " + req.params);
        console.log("id  looks like this: " + id);
        const deleteCustomer = await pool.query(
            "DELETE FROM customers WHERE id = $1",
            [id]
        );
    } catch (error) {
        console.error(error.message);
    }
});

// Get customers table. Original using Fetch
// app.get("/api/v1/customers", async (req, res) => {
//   console.log(`Get Request made `);
//   try {
//     const allCustomers = await pool.query("SELECT * FROM customers");
//     res.json(allCustomers.rows);
//   } catch (error) {
//     console.error(error.message);
//   }
// });

// Get an individual customer by ID.
app.get("/api/v1/customers:id", async (req, res) => {
    console.log("Specific customer request made: ", req.params.id);

    try {
        const results = await pool.query(
            `SELECT * FROM customers WHERE id = $1`,
            [req.params.id]
        );
    } catch (error) {}
});

// ADD a new customer to the DB
app.post("/api/v1/customers", async (req, res) => {
    console.log("Post request made to customers db.");
    const { first_name, last_name, email } = req.body;

    try {
        const newCustomer = await pool.query(
            "INSERT INTO customers (first_name, last_name, email) VALUES ($1, $2, $3) RETURNING *",
            [first_name, last_name, email]
        );
        res.json(newCustomer);
        //For try block, could/ should return status instead of just the new data
        // res
        //   .status(201)
        //   .json({ status: "succes", data: { customer: newCustomer.rows[0] } });
    } catch (err) {
        console.error(err.message);
        res.status(500).json("Server error with customers post.");
    }
});

// // DELETE a customer based on id. Used with delete button.
// app.delete("/api/v1/customers:id", async (req, res) => {
//     console.log("Delete customer request made.");
//     try {
//         const { id } = req.params;
//         console.log("req.params looks like: " + req.params);
//         console.log("id  looks like this: " + id);
//         const deleteCustomer = await pool.query(
//             "DELETE FROM customers WHERE id = $1",
//             [id]
//         );
//     } catch (error) {
//         console.error(error.message);
//     }
// });

// // UPDATE or EDIT customer based on id. Used with Edit button.
// // This function has not been completed or tested 3/14/23
app.put("/api/v1/customers:id", async (req, res) => {
    console.log("Edit customer request made.");
    try {
        const { id } = req.params;
        const { first_name, last_name, email } = req.body;
        const editCustomer = await pool.query(
            "UPDATE customers SET first_name = $1, last_name = $2, email = $3 WHERE id = $4 RETURNING *",
            [first_name, last_name, email, id]
        );
        res.status(200).json({
            status: "Success",
            data: {
                customer: editCustomer.rows[0],
            },
        });
    } catch (error) {
        console.error(error.message);
    }
});
