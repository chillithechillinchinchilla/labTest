import React, { Fragment, useState, useEffect } from "react";
import CustomerFinder from "../apis/CustomerFinder";

function AddCustomer() {
    const [customer, setCustomer] = useState({
        first_name: "",
        last_name: "",
        email: "",
    });

    // Handle Submit Form using the first setup of FETCH
    // const handleSubmit = async (event) => {
    //   console.log("Post request made.");
    //   event.preventDefault(); // Override page refresh on submit
    //   const url = "http://localhost:5000/customers";
    //   try {
    //     const response = await fetch(url, {
    //       method: "POST",
    //       headers: { "Content-Type": "application/json" },
    //       body: JSON.stringify(customer),
    //     });
    //     const data = await response.json();
    //     console.log("made it this far in adding");
    //     // Reset form if successful
    //     // setCustomer({ first_name: "", last_name: "", email: "" });
    //     window.location = "/";
    //   } catch (error) {
    //     console.error(error);
    //   }
    // };

    // Handle Submit Form using the setup of AXIOS.
    // import the user made CustomerFinder, which shortens the URL used.
    const handleSubmit = async (e) => {
        console.log("Post request made.");
        e.preventDefault(); // Override page refresh on submit
        // order: what backend expects: what front end / useState is providing
        // if the names are the same, then you can shorten. But we are using an object.
        try {
            const response = await CustomerFinder.post("/", {
                first_name: customer.first_name,
                last_name: customer.last_name,
                email: customer.email,
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    // Handle change of fields
    const handleChange = async (event) => {
        console.log(event.target);
        const { name, value } = event.target;
        console.log(name + "  " + value);

        setCustomer((prevState) => ({ ...prevState, [name]: value }));
    };

    // Set return for form
    return (
        <div>
            <h1>Add a new customer.</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name
                    <input
                        type="text"
                        name="first_name"
                        onChange={handleChange}
                        placeholder="Enter First Name"
                        value={customer.first_name}
                    />
                </label>
                <label>
                    Last Name
                    <input
                        type="text"
                        name="last_name"
                        onChange={handleChange}
                        placeholder="Last Name"
                        value={customer.last_name}
                    />
                </label>
                <label>
                    Email
                    <input
                        type="text"
                        name="email"
                        onChange={handleChange}
                        placeholder="email"
                        value={customer.email}
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddCustomer;
