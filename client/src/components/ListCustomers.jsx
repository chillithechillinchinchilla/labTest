import React, { Fragment, useState, useEffect } from "react";

function ListCustomers() {
  const [customers, setCustomers] = useState([]);

  //retrieve all the items in the stored customers database list.
  const getCustomers = async () => {
    try {
      const response = await fetch("http://localhost:5000/customers");
      const jsonData = await response.json();
      setCustomers(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getCustomers();
  }, []);

  return (
    <Fragment>
      {" "}
      <table className="table mt-5 text-center">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>

              <td>
                <button
                  className="btn btn-danger"
                  //   onClick={() => deletecustomer(customer.customer_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>

    // <Fragment>
    //   <button className="btn btn-danger">Delete</button>
    //   <p>
    //     {customers.map((customer) => (
    //       <tr key={customer.customer_id}>
    //         <td>{customer.first_name}</td>
    //         <td>{customer.last_name}</td>
    //         <td>
    //           <button className="btn btn-danger">Delete</button>
    //         </td>
    //       </tr>
    //     ))}
    //   </p>
    // </Fragment>
  );
}

export default ListCustomers;
