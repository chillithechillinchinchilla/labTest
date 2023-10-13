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
import CustomerDetails from "./pages/CustomerDetails";
import UpdatePage from "./pages/UpdatePage";
import ProductsPage from "./pages/ProductsPage";

import { CustomersContextProvider } from "./context/CustomersContext";
import { ProductsContextProvider } from "./context/ProductsContext";

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
                path: "/customers/:id/update",
                element: <UpdatePage />,
            },
            {
                path: "/customers/:id/",
                element: <Single />,
            },
            {
                path: "/customers/:id/details",
                element: <CustomerDetails />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
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
            <ProductsContextProvider>
                <div className="app">
                    <div className="container">
                        <RouterProvider router={router} />
                    </div>
                </div>
            </ProductsContextProvider>
        </CustomersContextProvider>
    );
}

export default App;
