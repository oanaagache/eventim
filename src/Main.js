import React from "react";
import Ticket from "./Ticket";

const Main = (props) => {
  const { products, onAdd } = props;

  return (
    <main className="block1 col-2">
      <h2 style={{ fontStyle: "bold" }}>Tickets available: </h2>
      <div className="row">
        {products.map((product) => (
          <Ticket key={product.id} product={product} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
};
export default Main;
