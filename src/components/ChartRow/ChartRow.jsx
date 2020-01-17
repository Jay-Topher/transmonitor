import React from "react";
import './ChartRow.scss'
import ChartBody from "./ChartBody/ChartBody";
import SummaryCard from "../SummaryCard/SummaryCard";

const ChartRow = () => {
  return (
    <div className="ChartRow">
      <ChartBody />
      <div className="">
        <SummaryCard
          title="Orders"
          text1="Pending Orders"
          text2="Reconciled Orders"
          text3="Total Orders"
        />
        <SummaryCard
          title="Payments"
          text1="Un-reconciled Payments"
          text2="Reconciled Payments"
          text3="Total Payments"
        />
      </div>
    </div>
  );
};

export default ChartRow;
