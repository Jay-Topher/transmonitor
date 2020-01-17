import React, { useState, useEffect } from "react";
import "./Main.scss";
import TransactionContainer from "../../components/TransactionContainer/TransactionContainer";
import ChartRow from "../../components/ChartRow/ChartRow";
import CustomSelect from "../../components/CustomSelect/CustomSelect";
import Table from "../../components/Table/Table";
import Pagination from "react-js-pagination";

const Main = () => {
  const [tableData, setTableData] = useState([]);
  useEffect(() => {
    fetch("metadata.json")
      .then(res => res.json())
      .then(res => setTableData(res.tableData));
  }, []);
  const searchIcon = "assets/search.svg";
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataPerPage, setDataPerPage] = useState(10);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = tableData.slice(indexOfFirstData, indexOfLastData);
  const onSelect = e => {
    setDataPerPage(e.target.value);
  };
  const paginate = p => {
    setCurrentPage(p);
  };
  return (
    <div className="Main">
      <div className="Main_child">
        <TransactionContainer />
        <ChartRow />
        <h3 className="heading">Payments</h3>
        <div className="pre_paginate">
          <div className="showing">
            <div>
              <span className="mr-2">Showing</span>
              <CustomSelect
                data={[10, 15, 20, 25]}
                type="small"
                hasBorder={false}
                onSelect={onSelect}
              />
              <span> out of {tableData.length} payments</span>
            </div>
            <div className="search mx-5">
              <label htmlFor="search2" className="mr-1">
                <img src={searchIcon} alt="" />
              </label>
              <input
                type="search"
                name=""
                id="search2"
                placeholder="Search payments"
              />
            </div>
            <div className="show_select ml-5">
              <span className="mr-3">Show</span>
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
        <div className="table_summary">
              <div className="shows">Showing {indexOfFirstData+1} to {indexOfLastData} of {tableData.length} entries</div>
          <div className="pagin">
            <Pagination
              hideFirstLastPages
              activePage={currentPage}
              itemsCountPerPage={dataPerPage}
              pageRangeDisplayed={2}
              prevPageText="Previous"
              nextPageText="Next"
              itemClass="page-item"
              linkClass="page-link"
              totalItemsCount={tableData.length}
              onChange={paginate}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
