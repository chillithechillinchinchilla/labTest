import React, { Fragment, useState, useEffect } from "react";

function ListCustomers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/customers")
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  //retrieve all the items in the stored customers database list.
  const getCustomers = async () => {
    //http://localhost:5000/customers
    try {
      const response = await fetch(`http://localhost:5000/customers`);
      const data = await response.json();
      setCustomers(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  const deleteCustomer = (id) => {
    fetch(`http://localhost:5000/customers/${id}`, { method: "DELETE" }).then(
      (response) => {
        setCustomers(customers.filter((customer) => customer.id !== id));
      }
    );
  };

  // const deleteCustomer = async (id) => {
  //   console.log("made it this far into delete");
  //   const deleteCustomer = await fetch(
  //     `http://localhost:5000/customers/${id}`,
  //     { method: "DELETE" }
  //   );
  //   const updatedCustomers = customers.filter((customer) => customer.id !== id);
  //   setCustomers(updatedCustomers);
  //   // setCustomers((customers) =>
  //   //   customers.filter((customer) => customer.id !== id)
  //   // );
  //   // setCustomers(customers.filter((customer) => customer.id !== id));
  // };

  //This may be incorrect.
  const editCustomer = async (id) => {
    // try {
    //   //create response and id to send to DB in order to edit.
    //   const editCustomer = await fetch(
    //     "http://localhost:5000/customers/${id}",
    //     { method: "PUT" }
    //   );
    // } catch (error) {
    //   console.error(error.message);
    // }
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
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.first_name}</td>
              <td>{customer.last_name}</td>
              <td>{customer.email}</td>
              <td>
                <button
                  className="btn btn-warning"
                  onClick={() => editCustomer(customer.id)}
                >
                  Edit
                </button>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteCustomer(customer.id)}
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
}

export default ListCustomers;

// //below is before updating the fetch requests
// import React, { Fragment, useState, useEffect, useMemo } from "react";

// function ListCustomers() {
//   const [customers, setCustomers] = useState([]);
//   // const customersMemo = useMemo(() => getCustomers(), [customers]);

//   useEffect(() => {
//     getCustomers();
//   }, []);

//   //retrieve all the items in the stored customers database list.
//   const getCustomers = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/customers");
//       const jsonData = await response.json();
//       setCustomers(jsonData);
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

//   const deleteCustomer = async (id) => {
//     try {
//       const deleteCustomer = await fetch(
//         `http://localhost:5000/customers/${id}`,
//         { method: "DELETE" }
//       );
//       if (deleteCustomer.status === 200) {
//         setCustomers(customers.filter((customer) => customer.id !== id));
//       }
//     } catch (error) {
//       console.error(error.message);
//     }
//   };

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
