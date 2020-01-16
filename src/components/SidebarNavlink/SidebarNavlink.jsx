import React from "react";

const SidebarNavlink = ({ text, icon }) => {
  return (
    <div className="SidebarNavlink">
      <a href="#" className="links">
        <span className="icon">
          <img src={icon} alt="icon" />
        </span>
        <p>{text}</p>
      </a>
    </div>
  );
};

export default SidebarNavlink;
