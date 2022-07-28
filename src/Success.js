import React from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";
import logo from "./image4.jpg";

const Success = () => {
  let navigate = useNavigate();
  return (
    <div className="response">
      <img src={logo} />
      <h2 className="title" style={{ fontStyle: "bold" }}>
        Your Ticket Was Sent To Your Email.
      </h2>

      <button
        className="back"
        onClick={() => {
          navigate("/main");
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Success;
