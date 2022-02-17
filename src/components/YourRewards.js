import React from "react";
import "../styles/yourrewards.css";
import group16082 from "../images/Group 16082.png";


const YourRewards = () => {
  return (
    <div className="your-rewards">
      <div className="heading">
        <h1>YourRewards</h1>
      </div>
      <div className="amount">
        <h1>$ 0.26231428</h1>
        <p><img src={group16082} /> Custom link</p>
      </div>
      <div className="buttons">

      </div>
    </div>
  );
};

export default YourRewards;
