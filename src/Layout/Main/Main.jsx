import React from "react";
import "./Main.scss";
import TransactionContainer from "../../components/TransactionContainer/TransactionContainer";
import ChartRow from "../../components/ChartRow/ChartRow";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main_child bordered">
        <TransactionContainer />
        <ChartRow />
      </div>
    </div>
  );
};

export default Main;
