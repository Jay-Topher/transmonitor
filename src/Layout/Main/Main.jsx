import React from "react";
import "./Main.scss";
import TransactionContainer from "../../components/TransactionContainer/TransactionContainer";
import ChartRow from "../../components/ChartRow/ChartRow";

const Main = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("metadata.json")
      .then(res => res.json())
      .then(res => setTableData(res.tableData));
  }, []);
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
        </div>
        <div className="table">
          {loading ? <h4>Loading...</h4> : <Table tableData={currentData} />}
        </div>
  );
};

export default Main;
