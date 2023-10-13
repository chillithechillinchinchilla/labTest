import React, { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState([null]);

    return (
        <ProductsContext.Provider
            value={{
                products,
                setProducts,
                selectedProduct,
                setSelectedProduct,
            }}
        >
            {props.children}
        </ProductsContext.Provider>
    );
};
