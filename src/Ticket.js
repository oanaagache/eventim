import React from "react";

const Ticket = (props) => {
  const { product, onAdd } = props;

  return (
    <div>
      <h3>Type:{product.title}</h3>
      <h3>Band:{product.name}</h3>
      <h3>Place:{product.place}</h3>
      <h3>Hour:{product.hour}</h3>
      <h3>Date:{product.date}</h3>
      <h3>Description:{product.description}</h3>
      <h3>Price: {product.price}</h3>
      <h3>Quantity: {product.quantity}</h3>
      <div>
        <button onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  );
};
export default Ticket;
