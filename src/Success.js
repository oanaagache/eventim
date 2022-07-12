import React from "react";
import "./Success.css";
import { useNavigate } from "react-router-dom";

const Success = () => {
  let navigate = useNavigate();
  return (
    <div className="response">
      <h2 className="title">Thank you!</h2>
      <h2 className="title">Your ticket was sent to your email</h2>

      <button
        className="back"
        onClick={() => {
          navigate("/main");
        }}
      >
        Back to Shopping page
      </button>
    </div>
  );
};

export default Success;
