import React, { Fragment, useState, useEffect, useContext } from "react";
import CustomerFinder from "../apis/CustomerFinder";
import { CustomersContext } from "../context/CustomersContext";

// in return, the customers && sets that the section only renders when the customers
// object actually exists. prevents empty fill if data doesnt fetch fast enough?
// //customers &&
// customers.map((customer)

const ListCustomers = (props) => {
    const { customers, setCustomers } = useContext(CustomersContext);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await CustomerFinder.get("/");
                setCustomers(response.data.data.customers); // update useState
                console.log(response);
            } catch (err) {}
        };

        fetchData();
    }, []);

    //     const deleteCustomer = (id) => {
    //   fetch(`http://localhost:5000/api/v1/customers/${id}`, {
    //     method: "DELETE",
    //   }).then((response) => {
    //     setCustomers(customers.filter((customer) => customer.id !== id));
    //   });
    // };

    // function ListCustomers(props) {
    //   //const [customers, setCustomers] = useState([]);
    //   const { customers, setCustomers } = useContext(CustomersContext);

    //   useEffect(async() => {
    //     try {
    //       const response = await CustomerFinder.get("/")
    //       console.log(response)
    //     } catch (error) {

    //     }
    //   },[])

    // From before i restarted the video
    // useEffect(() => {
    //   const fetchData = async () => {
    //     try {
    //       const response = await CustomerFinder.get("/"); // Whatever is in quotes, is added to end of baseURL in CustomerFinder.
    //       console.log(response);
    //       //setCustomers(response.data.data.customers);
    //     } catch (error) {}
    //   };
    //   fetchData();
    // }, []);

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
                            <tr key={customer.id}>
                                <td>{customer.first_name}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.email}</td>
                                <td>
                                    <button
                                        className="btn btn-warning"
                                        //onClick={() => editCustomer(customer.id)}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        //onClick={() => deleteCustomer(customer.id)}
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
