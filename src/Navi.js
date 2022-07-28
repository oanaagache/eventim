import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";

const Navi = (props) => {
  const { countCartItems } = props;
  return (
    <div className="header">
      <div className="header-content">
        <ul className="header-menu">
          <li>
            <Link to="/">
              <span className="about-nav">Event Shop</span>
            </Link>
          </li>
          <li>
            <Link to="/Main">
              <span className="about-nav">Buy Tickets</span>
            </Link>
          </li>

          <li>
            <Link to="/Events">
              <span className="about-nav">Events</span>
            </Link>
          </li>
          <li>
            <Link to="/AddEvent">
              <span className="about-nav">Add Event</span>
            </Link>
          </li>

          <li>
            <Link to="/Reports">
              <span className="about-nav">Reports</span>
            </Link>
          </li>
          <div>
            <a href="#/cart">
              Cart{" "}
              {countCartItems ? (
                <button className="badge">{countCartItems}</button>
              ) : (
                ""
              )}
            </a>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navi;
