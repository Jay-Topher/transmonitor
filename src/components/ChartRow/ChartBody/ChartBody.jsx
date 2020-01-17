import React from "react";
import './ChartBody.scss'
import Months from "../Months/Months";

const ChartBody = () => {
  const previous = "assets/Left Button.svg";
  const next = "assets/Right Button.svg";
  const chart = 'assets/big_graph.svg'
  return (
    <div className="ChartBody">
      <div className="chart_header">
        <h3>Today: 5, Aug 2018</h3>
        <div className="chart_selects">
          <select id="" disabled="disabled" className="mr-3">
            <option value="1 Jan - 1 Jun" selected>
              1 Jan - 1 Jun
            </option>
          </select>
          <span className="ml-3">
            <button className="chart_btn">
              <img src={previous} alt="previous" />
            </button>
            <button className="chart_btn">
              <img src={next} alt="next" />
            </button>
          </span>
        </div>
      </div>
      <div className="main_chart">
        <div className="keys">
          <Months />
        </div>
        <div className="chart">
          <img src={chart} alt="chart" className="chartz"/>
        </div>
      </div>
    </div>
  );
};

export default ChartBody;
