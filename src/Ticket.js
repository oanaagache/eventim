import React from "react";

const Ticket = (props) => {
  const { product, onAdd } = props;

  const styleC = {
    color: "#2B2B2B",
    textAlign: "left",
    margin: "2px",
    height: "370px",
    border: "2px solid #F4F4F4",
    padding: "5px",
    borderRadius: "10px",
    boxShadow:
      "rgba(255, 255, 255, 0.2) 0px 0px 0px 1px inset, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px",
  };

  return (
    <div style={styleC}>
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
