// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((data) => data.json())
      .then((res) => setProducts(res));
  }, []);

  const handleAddToCart = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  return (
    <div className='shop-container'>
      <div className='products-container'>
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}></Product>
        ))}
      </div>
      <Cart cart={cart}></Cart>
    </div>
  );
};

export default Shop;
