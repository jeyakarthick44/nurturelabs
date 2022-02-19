import React from "react";
import "../styles/sidebar.css";
import ellipse from "../images/Ellipse.png";
import category from "../images/Category.png";
import group15792 from "../images/Group 15792.png";
import group15794 from "../images/Group 15794.png";
import group15799 from "../images/Group 15799.png";
import group15802 from "../images/Group 15802.png";
import group15803 from "../images/Group 15803.png";
import group15804 from "../images/Group 15804.png";
import group15874 from "../images/Group 15874.png";
import group from "../images/Group.png";
import group1 from "../images/Group1.png";
import toggle from "../images/toggle.png";
import vector from "../images/Vector.png";
// import path from "../images/Path.png";
// import path1 from "../images/Path1.png";
import slide from "../images/slide-left.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="heading">
        <img src={ellipse} alt=""/>
        <h6>N</h6>
        <h1>Name</h1>
      </div>
      <img className="slide" src={slide} alt=""/>
      <div className="sections">
        <div className="section-container">
          <img src={category} alt=""/>
          <p>Home</p>
        </div>
        <div className="section-container">
          <img src={group15792} alt=""/>
          <p>Section1</p>
        </div>
        <div className="section-container">
          <img src={group15799} alt=""/>
          <p>Section2</p>
        </div>
        <div className="section-container">
          <img src={group15794} alt=""/>
          <p>Section3</p>
        </div>
        <div className="section-container">
          <img src={group15874} alt=""/>
          <p>Section4</p>
        </div>
        <div className="section-container">
          <img src={group15802} alt=""/>
          <p>Section5</p>
        </div>
        <div className="section-container">
          <img src={group15803} alt=""/>
          <p>Section6</p>
        </div>
        <div className="section-container">
          <img src={group15804} alt=""/>
          <p>Section7</p>
        </div>
        <div className="section-container">
          <img src={group1} alt=""/>
          <p>Section8</p>
        </div>
        <div className="section-container">
          <img src={group} alt=""/>
          <p>Documentation</p>
        </div>
      </div>
      <div className="section-bottom-container">
        <div className="section-bottom1">
          <img src={ellipse} alt=""/>
          <h6>N</h6>
          <h1>$0.90</h1>
        </div>
        <div className="section-bottom2">
          <p>Buy $XYZ</p>
        </div>
      </div>
      <img className="section-bottom-img" src={vector} alt=""/>
      <img className="section-bottom-toggle" src={toggle} alt=""/>
    </div>
  );
};
export default Sidebar;
