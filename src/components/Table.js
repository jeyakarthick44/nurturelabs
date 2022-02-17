import React from "react";
import "../styles/table.css";
import line from "../images/line.png";
import TableData from "./TableData";

const Table = () => {
  return (
    <>
      <div className="container">
        <div className="bottom-menu">
          <h2>First Tab</h2>
          <img src={line} />
        </div>
        <div className="bottom-menu">
          <h2>Second Tab</h2>
          <img src={line} />
        </div>
      </div>
      <TableData />
    </>
  );
};

export default Table;
