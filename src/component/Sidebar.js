import React from "react";
import {
  BiHome,
  BiBookAlt,
  BiMessage,
  BiStats,
  BiTask,
  BiSolidReport,
} from "react-icons/bi";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="menu">
      <div className="logo">
        <BiBookAlt className="logo-icon" />
        <h2>DSSD</h2>
      </div>
      <div className="menu--list">
        <a href="" className="item active">
          <BiHome className="icon" />
          DashBord
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
