import React, { useState, createContext } from "react";

export const CustomersContext = createContext();

export const CustomersContextProvider = (props) => {
  const [customers, setCustomers] = useState([]);

  return (
    <CustomersContext.Provider value={{ customers, setCustomers }}>
      {props.children}
    </CustomersContext.Provider>
  );
};
