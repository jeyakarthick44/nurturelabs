import React from "react";
import "../styles/promopanel.css";
import promoImage from "../images/11.png"
import remove from "../images/i-remove.png"
import circle from "../images/circle.png"


const PromoPanel = () => {
  return (
      <>
    <div className="promo">
      <h1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      <button>Tutorial</button>
      </h1>
    </div>
      <img className="promo-image" src={promoImage} alt=""/>
      <img className="remove" src={remove} alt=""/>
      <img className="circle" src={circle} alt=""/>
      </>
  );
};

export default PromoPanel;
