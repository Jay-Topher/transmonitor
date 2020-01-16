import React from "react";
import './Navbar.scss'
import HelloProfile from '../../components/HelloProfile/HelloProfile'

const Navbar = () => {
  const logo = "assets/TransMonitor.svg";
  const notification = 'assets/notification_bell.svg'
  const searchIcon = 'assets/search.svg'
  return (
    <div className="Navbar">
      <div className="left_navbar">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="search">
          <label htmlFor="search">
            <img src={searchIcon} alt=""/>
          </label>
          <input type="search" name="" id="search" placeholder="Search..." />
        </div>
      </div>
      <div className="right_navbar">
        <a href="#">Support</a>
        <a href="#">FAQ</a>
        <a href="#">
          <img src={notification} alt="notification"/>
        </a>
        <HelloProfile />
      </div>
    </div>
  );
};

export default Navbar;
