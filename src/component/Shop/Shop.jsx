// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map((product) => (
          <Product key={product.id} product={product}></Product>
        ))}
      </div>
      <div className='cart-container'>
        <h3>Order Summary</h3>
      </div>
    </div>
  );
};

export default Shop;
