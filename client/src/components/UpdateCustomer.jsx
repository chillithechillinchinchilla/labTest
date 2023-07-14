import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomerFinder from "../apis/CustomerFinder";

const UpdateCustomer = (props) => {
    const { id } = useParams(); // Params from URL
    const [customer, setCustomer] = useState({
        first_name: "",
        last_name: "",
        email: "",
    });
    let navigate = useNavigate();
    // We could technically use the useContext functionallity to populate the form
    // with the customer data, however, if the user bookmarks the page, or comes from anywhere other than the update button,
    // The data will not be passed through and things break.
    // Instead we will useEffect and import data directly from db.

    useEffect(() => {
        const fetchData = async () => {
            const response = await CustomerFinder.get(`/${id}`);
            console.log("UseEffect updateCustomer reached");
            console.log(response.data.data.customer);
            setCustomer(response.data.data.customer);
        };
        fetchData();
    }, []);

    const handleChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;
        console.log(name + " " + value);
        setCustomer((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async (e) => {
        console.log("Submit to update customer data");
        e.preventDefault();
        try {
            const updatedCustomer = await CustomerFinder.put(`/${id}`, {
                first_name: customer.first_name,
                last_name: customer.last_name,
                email: customer.email,
            });
            navigate("/");
        } catch (error) {}
    };

    return (
        <div>
            <form action="">
                <div className="form-group">
                    <label htmlFor="first_name">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={customer.first_name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={customer.last_name}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        value={customer.email}
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateCustomer;

// The Process:
// Create your basic React page, with a <div> and text. Test the route.
// Create form, labels and test setup.
// Setup any params / props and test with console log
// Setup any needed useState
// Then add value and onChange fields to the form inputs
// Create onChange event handler.
// Any update should be seen in react console now
// Next, we will use useEffect() to import the customer data into each field
// We will perform a GET request, then assign the data to the useState.
// At this point, the customer info should load into the form fields.
// next we will create the onsubmit function and then assign it to the form.
// onsubmit should be async await because we are making an api call
