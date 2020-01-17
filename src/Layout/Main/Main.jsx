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
              <CustomSelect
                data={[10, 15, 20, 25]}
                type="small"
                hasBorder={false}
                onSelect={onSelect}
              />
              <CustomSelect
                data={[
                  "All",
                  "Reconciled",
                  "Un-reconciled",
                  "Settled",
                  "Unsettled"
                ]}
                hasBorder={true}
                type="normal"
              />
      </div>
    </div>
  );
};

export default Main;
