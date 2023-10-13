import React, { useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";

const ListProducts = () => {
    //const { products, setProducts } = useContext(ProductsContext);
    //need to add navigate??

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
                            <th scope="col"> Serial Number</th>
                            <th scope="col"> CPU</th>
                            <th scope="col"> Memory</th>
                        </tr>
                        <tr>Row 1</tr>
                        <tr>Row 2</tr>
                    </thead>
                </table>
            </div>
        </div>
    );
};

export default ListProducts;
