import React from 'react'
import { BiHome, BiBookAlt, BiMessage, BiStats, BiTask, BiSolidReport, } from "react-icons/bi";
import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className='menu'>
            <div className="logo">
                <BiBookAlt className="logo-icon" />
                <h2>DSSD</h2>
            </div>
            <div className="menu--list">
                <a href="" className="item active">
                    <BiHome className="icon" />
                    DashBord
                </a>
                <a href="" className="item">
                    <BiTask className="icon" />
                    Assigment
                </a>
                <a href="" className="item">
                    <BiSolidReport className="icon" />
                    Report
                </a>
                <a href="" className="item">
                    <BiStats className="icon" />
                    Stats
                </a>
                <a href="" className="item">
                    <BiMessage className="icon" />
                    Message
                </a>
            </div>
        </div>
    )
}

export default Sidebar;