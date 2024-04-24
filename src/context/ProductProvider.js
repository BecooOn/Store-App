import axios from "axios";
import React, { createContext, useContext, useEffect, useState } from "react";

const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axios(
          `https://dummyjson.com/products/search?q=${search}`
        );
        const data = res.data;
        setProducts(data.products);
        // console.log(data.products);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [search]);

  const values = { products, loading, search,setSearch };
  return (
    <ProductContext.Provider value={values}>{children}</ProductContext.Provider>
  );
};

export const useProductsContext = () => {
  return useContext(ProductContext);
};

export default ProductProvider;
