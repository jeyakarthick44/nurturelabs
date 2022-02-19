import React from "react";
import "../styles/aside.css";
import ellipse2 from "../images/Ellipse2.png";
import wallet from "../images/Wallet.png";
import left from "../images/left-arr.png";
import down from "../images/down-arrow.png";
import group16082 from "../images/Group 16082.png";
import cancel from "../images/cancel.png";

const Aside = () => {
  return (
    <>
      <div className="aside">
        <div className="dividing">
          <div className="order1">
            <img className="ellipse1" src={ellipse2} alt=""/>
            <h2 className="chain-name1">Avalanche</h2>
            <img className="down-arr1" src={down} alt=""/>
          </div>
          <div className="tier">
            <img className="wallet1" src={wallet}  alt=""/>
            <p>0xf6...1353</p>
            <img className="down-arr2" src={down} alt=""/>
          </div>
        </div>
        <div className="main-slide">
          <img className="left-arr" src={left} alt=""/>
          <p className="custom-link3">Custom link</p>
        </div>
        <p className="enter">Enter</p>
        <h6 className="page-link">https://testnet.xyz.xyz/trade?ref=</h6>
        <p className="custom">
          <img src={group16082} alt=""/> Custom link
        </p>
        <p className="cancel">
          <img src={cancel} alt="" /> Cancel
        </p>
      </div>
    </>
  );
};

export default Aside;
