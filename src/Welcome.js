import React from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";
import logo from "./image2.jpg";

const Welcome = () => {
  let navigate = useNavigate();
  return (
    <div className="response">
      <div>
        <h1 className="title" style={{ fontStyle: "bold" }}>
          Welcome To Your Shop
        </h1>
        <img style={{ padding: "30px" }} src={logo} />
      </div>

      <button className="back" onClick={() => navigate("/Main")}>
        Back
      </button>
    </div>
  );
};

export default Welcome;
