import React, { useState, createContext } from "react";

export const CustomersContext = createContext();

export const CustomersContextProvider = (props) => {
    const [customers, setCustomers] = useState([]);
    const [selectedCustomer, setSelectedCustomer] = useState(null);

    return (
        <CustomersContext.Provider
            value={{
                customers,
                setCustomers,
                selectedCustomer,
                setSelectedCustomer,
            }}
        >
            {props.children}
        </CustomersContext.Provider>
    );
};
