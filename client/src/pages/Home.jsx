import React from "react";
import ListCustomers from "../components/ListCustomers";
import DarkNavbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <DarkNavbar />
      <ListCustomers />
    </div>
  );
};

export default Home;
