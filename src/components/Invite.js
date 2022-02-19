import React from "react";
import "../styles/invite.css";
import ungroup from "../images/ungroup.png";
import money from "../images/money-bag.png";
import gradient from "../images/gradient.png";

const Invite = () => {
  return (
    <div className="invite">
      <div className="division1">
        <div>
          <h1>
            <img className="gradient" src={gradient} alt=""/>
            <img className="money" src={money} alt=""/>
            12% of fee
          </h1>
          <h2>Your Referral Link for xyz</h2>
          <h3>
            https://unityexchange.design
            <img className="ungroup" src={ungroup} alt=""/>
          </h3>
        </div>
      </div>
      <div className="division2">
        <div>
          <h1>
            <img className="gradient1" src={gradient} alt=""/>
            <img className="money1" src={money} alt=""/>
            12% of fee
          </h1>
          <h2>Your Referral Link for xyz</h2>
          <h3>
            https://unityexchange.design
            <img className="ungroup1" src={ungroup} alt=""/>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Invite;
