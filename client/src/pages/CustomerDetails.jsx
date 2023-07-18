import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CustomersContext } from "../context/CustomersContext";
import CustomerFinder from "../apis/CustomerFinder";

// Will want the customer details
// Will want reviews of the customer.
// will need to add navigate functionality

const CustomerDetails = () => {
    const { id } = useParams();
    // console.log("customerDetails opened for: ", id);

    const { selectedCustomer, setSelectedCustomer } =
        useContext(CustomersContext);
    try {
        useEffect(() => {
            const fetchData = async () => {
                const response = await CustomerFinder.get(`/${id}`);
                console.log(
                    "Details response is: ",
                    response.data.data.customer
                );
                setSelectedCustomer(response.data.data.customer);
            };
            fetchData();
            //console.log(selectedCustomer);
        }, []);
    } catch (error) {
        console.error(error);
    }

    return (
        <div>
            <h1>Customer Details</h1>
            <h2>
                {selectedCustomer &&
                    selectedCustomer.first_name +
                        " " +
                        selectedCustomer.last_name}
            </h2>
        </div>
    );
};

export default CustomerDetails;

// Steps
// for this, we will not create a component to import, but we can refactor once schema set.
// Need to get access to ID
// We will add a new state to CustomersContext so that the entire app kows what customer the user has selected
// add newly created  selected customer hook, and then complete Use Effect to fetch the data.
// then we acn reuest basic data
// will need to create another table for reviews and link in SQL
// then fetch that data as well.
// Create layout elements

//           {selectedCustomer && selectedCustomer.name} //only when we have a selected customer will the name actually get rendered.
