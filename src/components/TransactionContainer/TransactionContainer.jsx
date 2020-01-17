import React from "react";
import "./TransactionContainer.scss";
import TransactionCard from "../TransactionCard/TransactionCard";

const TransactionContainer = () => {
  const transaction = [
    { title: "Daily Transaction Volume", figure: "2,342" },
    { title: "Daily Transaction Value", figure: "₦4,000,000" },
    { title: "Total Transaction Volume", figure: "452,000" },
    { title: "Total Transaction Value", figure: "₦4,000,000" }
  ];

  return (
    <div className="TransactionContainer">
      {transaction.map(t => (
        <TransactionCard title={t.title} figure={t.figure} key={t.title} />
      ))}
    </div>
  );
};

export default TransactionContainer;
