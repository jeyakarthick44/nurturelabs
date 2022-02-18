import React, { useState, useEffect } from "react";
import axios from "axios";
import group16082 from "../images/Group 16082.png";


const TableData = () => {
  const [getData, setGetData] = useState("");
  useEffect(() => {
    getApi();
  }, []);

  const getApi = () => {
    axios
      .get("https://raw.githubusercontent.com/akshita151199/APIs/main/data")
      .then(function (response) {
        const getValues = response.data.data;
        console.log(getValues);
        setGetData(getValues);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const change = (str) => {
    let a = str.slice(0, 5);
    let b = str.slice(35, 42);
    let c = a.concat("..", b);
    console.log(c);
    return c;
  };

  return (
    <div className="table-values">
      <div className="head-container">
        <p>ASSET</p>
        <p>AMOUNT</p>
        <p>USER ACCOUNT</p>
        <p>REFERRAL EARNING</p>
      </div>
      {Object.keys(getData).map((item, index) => (
        <div key={index} className="body">
          <img className="bitcoin-img" src={getData[item].img} />
          <p>{getData[item].asset}<br />
          <div className="order">
          <h3 className="type">{getData[item].type}</h3>
          <img className="ellipse" src={getData[item].chain.img}/> <h2 className="chain-name">{getData[item].chain.name}</h2>
          </div>
          </p>
          <p>{getData[item].amount}BNB <br /><h6 className="expired">{getData[item].state}</h6></p>
          <p>{change(getData[item].user)}</p>
          <p>{getData[item].referral_earnings}BNB<br /><h1 className="view">View on BSC Scan</h1>
          <img className="custom-link" src={group16082} />
          </p>
        </div>
      ))}
    </div>
  );
};

export default TableData

