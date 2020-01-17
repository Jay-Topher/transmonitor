import React from "react";
import "./Main.scss";
import TransactionContainer from "../../components/TransactionContainer/TransactionContainer";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main_child bordered">
        <TransactionContainer />
      </div>
    </div>
  );
};

export default Main;
