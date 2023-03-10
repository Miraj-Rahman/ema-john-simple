import { prettyDOM } from "@testing-library/react";
import React from "react";

const Cart = (props) => {
  const cart = props.cart;

  console.log(cart);
  const total = cart.reduce((total, product) => total + product.price, 0);

  let shipping = 0;
  if (shipping > 35) {
    shipping = 0;
  } else if (total > 15) {
    shipping = 4.99;
  } else if (total > 0) {
    shipping = 12.99;
  }

  const tax = Math.round(total / 10).toFixed(2);
  const grandTotal = Math.round(total + shipping + Number(tax)).toFixed(2);

  return (
    <div>
      <h4>Order Summary</h4>
      <p>Item Ordered: {cart.length} </p>
      <p>Product Price: {total.toFixed(2)} </p>
      <p>
        <small>Shipping Cost: {shipping}</small>
      </p>
      <p>
        <small>TAX + VAT : {tax}</small>
      </p>
      <p>Total Price{grandTotal}</p>
    </div>
  );
};

export default Cart;
