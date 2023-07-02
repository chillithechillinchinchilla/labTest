import "./App.css";
import Footer from "./components/Footer";
import DarkNavbar from "./components/Navbar";
import ListCustomers from "./components/ListCustomers";
import ErrorPage from "./pages/error-page";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Root from "./pages/Root";
import Single from "./pages/Single";
import Write from "./pages/Write";
import { CustomersContextProvider } from "./context/CustomersContext";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
} from "react-router-dom";
// import Root, { loader as rootLoader, action as rootAction } from "./pages/Root";

const Layout = () => {
  return (
    <>
      <DarkNavbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post/:id",
        element: <Single />,
      },
      {
        path: "write",
        element: <Write />,
      },
      {
        path: "/test",
        element: <div>This is test</div>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <CustomersContextProvider>
      <div className="app">
        <div className="container">
          <RouterProvider router={router} />
        </div>
      </div>
    </CustomersContextProvider>
  );
}

export default App;
