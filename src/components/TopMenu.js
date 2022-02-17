import React from 'react'
import "../styles/topmenu.css";
import line from "../images/line.png"
import wallet from "../images/Wallet.png"


const TopMenu = () => {
  return (
    <div className='container'>
    <div className='topmenu'>
      <h2>Section</h2>
      <img src={line} />
    </div>
      <div className='tier'>
      <img src={wallet} />
        <p>0.2 $XYZ</p>
        <h2>Tier 1</h2>
      </div>
    </div>
  )
}

export default TopMenu;