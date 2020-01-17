import React from "react";
import "./StatusBadge.scss";

const StatusBadge = ({ status }) => {
  const arrow = "assets/arrow_down.svg";
  const ellipse = `assets/ellipse_${
    status === "reconciled"
      ? "green"
      : status === "unreconciled"
      ? "yellow"
      : "grey"
  }.svg`;
  return (
    <div className="StatusBadge">
      <div className="color_badge">
        <span className="ml-2 mr-3 mb-1">
          <img src={ellipse} alt="."/>
        </span>
        <span
          className={`sm_text text_color_${
            status === "reconciled"
              ? "green"
              : status === "unreconciled"
              ? "yellow"
              : "grey"
          }`}
        >
          {status === "reconciled"
            ? "Reconciled"
            : status === "unreconciled"
            ? "Un-reconciled"
            : "Pending"}
        </span>
      </div>
      <div className="arrow">
        <img src={arrow} alt="options" />
      </div>
    </div>
  );
};

export default StatusBadge;
