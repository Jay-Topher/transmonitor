import React from "react";
import "./CustomSelect.scss";

const CustomSelect = ({ data, type, hasBorder, onSelect }) => {
  return (
    <select
      className={`${!hasBorder ? "no_bord" : null} ${type}`}
      onChange={e => onSelect(e)}
    >
      {data.map(d => (
        <option value={d}>{d}</option>
      ))}
    </select>
  );
};

export default CustomSelect;
