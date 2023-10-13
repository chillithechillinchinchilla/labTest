import React from "react";
import ListCustomers from "../components/ListCustomers";
import AddCustomer from "../components/AddCustomer";

const Home = () => {
    return (
        <div>
            {" "}
            <ListCustomers />
            <AddCustomer />
        </div>
    );
};

export default Home;
