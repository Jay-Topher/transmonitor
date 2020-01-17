import React, { useEffect, useState } from "react";
import './Table.scss'
import StatusBadge from "../StatusBadge/StatusBadge";
// import {tableData} from '../../metadata.json'

const Table = ({tableData}) => {
  

  return (
    <table style={{ width: "100%" }}>
      <tr>
        <th>Item Type</th>
        <th>Price</th>
        <th>Transaction No</th>
        <th>Time</th>
        <th>Status</th>
      </tr>
      {tableData.map(t => (
        <tr>
          <td>{t.itemType}</td>
          <td>{t.price}</td>
          <td>{t.transactionNo}</td>
          <td>{t.time}</td>
          <td><StatusBadge status={t.status} /></td>
        </tr>
      ))}
    </table>
  );
};

export default Table;
