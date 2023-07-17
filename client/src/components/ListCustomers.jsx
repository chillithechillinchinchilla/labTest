import React, { Fragment, useState, useEffect, useContext } from "react";
import CustomerFinder from "../apis/CustomerFinder";
import { CustomersContext } from "../context/CustomersContext";
import { useNavigate } from "react-router-dom";
// in return, the customers && sets that the section only renders when the customers
// object actually exists. prevents empty fill if data doesnt fetch fast enough?
// //customers &&
// customers.map((customer)

// List Customers with AXIOS
const ListCustomers = (props) => {
    const { customers, setCustomers } = useContext(CustomersContext);
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CustomerFinder.get("/");
                setCustomers(response.data.data.customers); // update useState 3:35
                console.log(response);
            } catch (err) {}
        };

        fetchData();
    }, []);

    // Delete customer with AXIOS
    const deleteCustomer = (e, id) => {
        e.stopPropagation();
        console.log("delete request made with id " + id);
        try {
            CustomerFinder.delete("/" + id);
            setCustomers(customers.filter((customer) => customer.id !== id));
        } catch (error) {}
    };

    // When user clicks 'Update' button, navigate to the customer update page
    const handleUpdate = (e, id) => {
        e.stopPropagation();
        navigate(`/customers/${id}/update`);
    };

    // When user clicks on a given row, navigate to that customer's detail page.
    const handleCustomerSelect = (id) => {
        navigate(`/customers/${id}/details`);
    };

    return (
        <Fragment>
            {" "}
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {customers &&
                        customers.map((customer) => (
                            <tr
                                onClick={() =>
                                    handleCustomerSelect(customer.id)
                                }
                                key={customer.id}
                            >
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        onClick={(e) =>
                                            handleUpdate(e, customer.id)
                                        }
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={(e) =>
                                            deleteCustomer(e, customer.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </Fragment>
    );
};

export default ListCustomers;

// Below is to handle list customers with Fetch instead of AXIOS.
// import React, { Fragment, useState, useEffect } from "react";

// function ListCustomers() {
//   const [customers, setCustomers] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:5000/api/v1/customers")
//       .then((response) => response.json())
//       .then((data) => setCustomers(data));
//   }, []);

//   //retrieve all the items in the stored customers database list.
//   const getCustomers = async () => {
//     //http://localhost:5000/customers
//     try {
//       const response = await fetch(`http://localhost:5000/api/v1/customers`);
//       const data = await response.json();
//       setCustomers(data);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const deleteCustomer = (id) => {
//     fetch(`http://localhost:5000/api/v1/customers/${id}`, {
//       method: "DELETE",
//     }).then((response) => {
//       setCustomers(customers.filter((customer) => customer.id !== id));
//     });
//   };

//   // const deleteCustomer = async (id) => {
//   //   console.log("made it this far into delete");
//   //   const deleteCustomer = await fetch(
//   //     `http://localhost:5000/customers/${id}`,
//   //     { method: "DELETE" }
//   //   );
//   //   const updatedCustomers = customers.filter((customer) => customer.id !== id);
//   //   setCustomers(updatedCustomers);
//   //   // setCustomers((customers) =>
//   //   //   customers.filter((customer) => customer.id !== id)
//   //   // );
//   //   // setCustomers(customers.filter((customer) => customer.id !== id));
//   // };

//   //This may be incorrect.
//   const editCustomer = async (id) => {
//     // try {
//     //   //create response and id to send to DB in order to edit.
//     //   const editCustomer = await fetch(
//     //     "http://localhost:5000/customers/${id}",
//     //     { method: "PUT" }
//     //   );
//     // } catch (error) {
//     //   console.error(error.message);
//     // }
//   };

//   return (
//     <Fragment>
//       {" "}
//       <table className="table mt-5 text-center">
//         <thead>
//           <tr>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {customers.map((customer) => (
//             <tr key={customer.id}>
//               <td>{customer.first_name}</td>
//               <td>{customer.last_name}</td>
//               <td>{customer.email}</td>
//               <td>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => editCustomer(customer.id)}
//                 >
//                   Edit
//                 </button>
//               </td>
//               <td>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteCustomer(customer.id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </Fragment>
//   );
// }

// export default ListCustomers;
