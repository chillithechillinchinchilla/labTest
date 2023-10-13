import React, { useContext, useEffect } from "react";
import { ProductsContext } from "../context/ProductsContext";
import ProductsFinder from "../apis/ProductsFinder";

const ListProducts = () => {
    const { products, setProducts } = useContext(ProductsContext);
    //need to add navigate??

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await ProductsFinder.get("/");
                setProducts(response.data.data.products);
            } catch (err) {}
        };
        fetchData();
    }, []);

    //need to add logic below for if no prducts loaded

    return (
        <div>
            <h1>Products Page</h1>
            <div className="list-group">
                <table className="table table-hover table-dark">
                    <thead>
                        <tr className="bg-primary">
                            <th scope="col"> Product</th>
                            <th scope="col"> Product Type</th>
                            <th scope="col"> Model</th>
                            <th scope="col"> CPU</th>
                            <th scope="col"> Memory</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products &&
                            products.map((product) => (
                                <tr>
                                    <td>{product.product}</td>
                                    <td>{product.product_type}</td>
                                    <td>{product.model_number}</td>

                                    <td>{product.processor}</td>
                                    <td>{product.memory}</td>
                                </tr>
                            ))}
                        ;
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
