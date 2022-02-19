import React from "react";
import "../styles/yourrewards.css";
import group16082 from "../images/Group 16082.png";

const YourRewards = () => {
  return (
    <div className="your-rewards">
      <div className="head">
        <h1>YourRewards</h1>
      </div>
      <div className="amount">
        <h1>$ 0.26231428</h1>
        <p>
          <img src={group16082} alt=""/> Custom link
        </p>
      </div>
      <div className="button-group">
        <button className="buttons">$40 AVAX</button>
        <button className="buttons">$10 BNB</button>
        <button className="buttons">$210 BTC</button>
      </div>
    </div>
  );
};

export default YourRewards;
