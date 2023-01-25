import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import DarkNavbar from "./components/Navbar";
import ListCustomers from "./components/ListCustomers";
import Home from "./pages/Home";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Home />
      </div>
    ),
  },
  {
    path: "/test",
    element: <div>This is test</div>,
  },
]);

function App() {
  return (
    <div>
      {
        <RouterProvider router={router} />
        /* <DarkNavbar />
      <ListCustomers />
      <Footer /> */
      }
    </div>
  );
}

export default App;
