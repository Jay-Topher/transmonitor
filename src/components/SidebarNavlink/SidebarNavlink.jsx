import React from "react";
import './SidebarNavlink.scss'

const SidebarNavlink = ({ text, icon }) => {
  return (
    <div className="SidebarNavlink">
      <a href="#" className="links">
        <span className="icon">
          <img src={icon} alt="icon" />
        </span>
        <span>{text}</span>
      </a>
    </div>
  );
};

export default SidebarNavlink;
