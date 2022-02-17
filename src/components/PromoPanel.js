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
      </h1>
      <button>Tutorial</button>
    </div>
      <img className="promo-image" src={promoImage} />
      <img className="remove" src={remove} />
      <img className="circle" src={circle} />
      </>
  );
};

export default PromoPanel;
