import React from "react";
import "./SummaryCard.scss";

const SummaryCard = ({ title, text1, text2, text3 }) => {
  return (
    <div className="SummaryCard">
      <h4>{title}</h4>
      <div
        className="progress mb-3"
        style={{ height: "4px", backgroundColor: "#FDC203", width: '320px' }}
      >
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow="80"
          aria-valuemin="0"
          aria-valuemax="100"
          style={{width:'80%', height: '4px', backgroundColor: '#27AE60'}}
        ></div>
      </div>
      <p>
        {text1}: <span className="sp_yellow">20</span>
      </p>
      <p>
        {text2}: <span className="sp_green">80</span>
      </p>
      <p>
        {text3}: <span className="sp_blue">100</span>
      </p>
    </div>
  );
};

export default SummaryCard;
