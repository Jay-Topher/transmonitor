import React from "react";
import './TransactionCard.scss'

const TransactionCard = ({title, figure}) => {
  const chart = "assets/small_chart.svg";
  return (
    <div className="TransactionCard">
      <div className="transaction_details">
        <div className="title">{title}</div>
        <div className="price">{figure}</div>
      </div>
      <div className="small_chart">
        <img src={chart} alt="chart" />
      </div>
    </div>
  );
};

export default TransactionCard;
