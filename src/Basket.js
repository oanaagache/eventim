import React from "react";
import { updateTickets } from "./AddEvent";
import logo from "./image3.jpg";
import { useNavigate } from "react-router-dom";

const Basket = (props) => {
  const { cartItems, onAdd, onRemove, eventList } = props;
  const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.01;
  const totalPrice = itemsPrice + taxPrice;

  const ticketsValidation = () => {
    cartItems.forEach((element) => {
      var event = eventList.find((y) => y.id === element.id);
      var ticketsQuantity = event.quantity - element.qty;
      updateTickets(event, ticketsQuantity);
    });
  };
  let navigate = useNavigate();

  return (
    <aside className="block2 col-3">
      <h2 style={{ fontStyle: "bold" }}>Cart Items:</h2>
      <div>
        {cartItems.length === 0 && (
          <div>
            <img style={{ padding: "40px" }} src={logo} />
            <h2 style={({ paddingTop: "80px" }, { paddingLeft: "50px" })}>
              Looks like you have not added anything to your cart yet.
            </h2>
            <br></br>
            <h2 style={({ paddingTop: "80px" }, { paddingLeft: "50px" })}>
              Add Tickets To Your Cart.
            </h2>
          </div>
        )}
        {cartItems.map((item) => (
          <div key={item.id} className="row">
            <div className="col-3">{item.name}</div>
            <div className="col-3">
              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>
            </div>

            <div className="col-3 text-right">
              {item.qty} x {item.price}
            </div>
          </div>
        ))}

        {cartItems.length !== 0 && (
          <>
            <div className="row">
              <div className="col-3">Tickets Price</div>
              <div className="col-3 text-right">{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-3">Tax Price</div>
              <div className="col-3 text-right">{taxPrice.toFixed(2)}</div>
            </div>

            <div className="row">
              <div className="col-3">
                <strong>Total Price</strong>
              </div>
              <div className="col-3 text-right">
                <strong>{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <button
              onClick={() => {
                ticketsValidation();
                navigate("/success");
              }}
            >
              Checkout
            </button>
          </>
        )}
      </div>
    </aside>
  );
};

export default Basket;
